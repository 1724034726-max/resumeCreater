import styles from "./Layout.module.less";
import LayoutModuleCard from "@/components/LayoutModuleCard";
import { useState, useCallback } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useChangeModuleOrder, useGetResumeModule } from "@/views/Home/context";
import NiceModal from "@ebay/nice-modal-react";
import { buildResumeModule, changeModuleOrder } from "@/views/Home/helper";
import { useAddResumeModule } from "@/views/Home/context";
import { useAppDispatch } from "@/hooks/redux";
const LayoutComponent: React.FC = () => {
  const moduleList = useGetResumeModule();
  const dispatch = useAppDispatch();
  //当前被拖拽的模块的索引
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  //当前拖拽到哪个模块上
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const handleDragStart = useCallback((_e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  }, [draggedIndex]);

  const handleDragEnd = useCallback(() => {
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      const newModuleList = changeModuleOrder(moduleList, draggedIndex, dragOverIndex);
      useChangeModuleOrder(dispatch, newModuleList);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, dragOverIndex]);

  const handleAddModule = useCallback(async () => {
    const formContent = await NiceModal.show("AddResumeModuleModal");
    const newModule = buildResumeModule(formContent);
    useAddResumeModule(dispatch, newModule);
  }, [dispatch]);
  return (
    <div className={styles.layoutComponent}>
      <div className={styles.header}>
        <div className={styles.title}>布局</div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddModule}
          className={styles.addButton}
        >
          新增模块
        </Button>
      </div>
      <div className={styles.moduleList}>
        {moduleList.map((item, index) => (
          <LayoutModuleCard
            key={item.key}
            moduleKey={item.key}
            title={item.title}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};
export default LayoutComponent;
