import styles from "./Layout.module.less";
import LayoutModuleCard from "@/components/LayoutModuleCard";
import { useCallback } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useChangeModuleOrder, useGetResumeModule } from "@/views/Home/context";
import NiceModal from "@ebay/nice-modal-react";
import { buildResumeModule, changeOrder } from "@/views/Home/helper";
import { useAddResumeModule } from "@/views/Home/context";
import { useAppDispatch } from "@/hooks/useRedux";
import useDrag from "@/hooks/useDrag";
const LayoutComponent: React.FC = () => {
  const moduleList = useGetResumeModule();
  const dispatch = useAppDispatch();
  const _handleDragEnd = useCallback((fromIndex: number, toIndex: number) => {
    const newModuleList = changeOrder(moduleList, fromIndex, toIndex);
    useChangeModuleOrder(dispatch, newModuleList);
  }, [dispatch, moduleList]);
  const { handleDragStart, handleDragOver, handleDragEnd } = useDrag({
    onDragEnd: _handleDragEnd,
  });
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
