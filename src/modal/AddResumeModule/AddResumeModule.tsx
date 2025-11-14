import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal, Form, Input } from 'antd';
import { useCallback } from 'react';
const AddResumeModuleModal = NiceModal.create(() => {
    const modal = useModal();
    const [form] = Form.useForm();
    const onModalOk = useCallback(async () => {
        await form.validateFields();
        const values = form.getFieldsValue();
        modal.resolve(values);
        form.resetFields();
        modal.hide();
    }, [form, modal]);
    const onModalCancel = useCallback(() => {
        form.resetFields();
        modal.hide();
    }, [form, modal]);
    return (
        <Modal
            title="新增模块"
            open={modal.visible}
            onOk={onModalOk}
            onCancel={onModalCancel}
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
    )
})
export default AddResumeModuleModal;