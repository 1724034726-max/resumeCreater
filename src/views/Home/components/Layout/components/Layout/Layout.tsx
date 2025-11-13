import styles from "./Layout.module.less";
import LayoutModuleCard from "@/components/LayoutModuleCard";
import { useState, useCallback } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useGetResumeModule } from "@/views/Home/context";
const LayoutComponent: React.FC = () => {
  console.error('我重新运行了')
  const moduleList = useGetResumeModule();
  const [selectedModule, setSelectedModule] = useState<string>("");
  //当前被拖拽的模块的索引
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  //当前拖拽到哪个模块上
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
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
      // setModuleList((prevList) => {
      //   const newList = [...prevList];
      //   const [draggedItem] = newList.splice(draggedIndex, 1);
      //   newList.splice(dragOverIndex, 0, draggedItem);
      //   return newList;
      // });
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, dragOverIndex]);

  const handleAddModule = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalOk = useCallback(() => {
    form.validateFields().then((values) => {
      const { title } = values;
      // 检查是否已存在相同标题的模块
      if (moduleList.some((item) => item.title === title)) {
        message.warning("该模块标题已存在，请使用其他标题");
        return;
      }
      // setModuleList((prevList) => [...prevList, { title, context: context || "" }]);
      message.success("模块添加成功");
      form.resetFields();
      setIsModalOpen(false);
    });
  }, [form, moduleList]);

  const handleModalCancel = useCallback(() => {
    form.resetFields();
    setIsModalOpen(false);
  }, [form]);

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
            key={item.title}
            title={item.title}
            selected={selectedModule === item.title}
            onSelect={() => setSelectedModule(item.title)}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            isDragging={draggedIndex === index}
            dragOverIndex={dragOverIndex}
            draggable={false}
          />
        ))}
      </div>
      <Modal
        title="新增模块"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="模块标题"
            rules={[{ required: true, message: "请输入模块标题" }]}
          >
            <Input placeholder="请输入模块标题" />
          </Form.Item>
          <Form.Item name="context" label="模块内容">
            <Input.TextArea
              placeholder="请输入模块内容（可选）"
              rows={4}
              autoSize={{ maxRows: 4, minRows: 4 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default LayoutComponent;
