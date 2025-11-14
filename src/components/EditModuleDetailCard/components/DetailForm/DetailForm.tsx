import { FORM_COMPONENTS_MAP } from "@/constants/resume";
import { Form } from "antd";
import { memo, useEffect, useMemo } from "react";
import { formatResumeModuleDetail } from "@/views/Home/helper";
import styles from "./DetailForm.module.less";
interface DetailFormComponentProps {
    data: ContentItem;
}
const DetailFormComponent: React.FC<DetailFormComponentProps> = ({ data }) => {
    const [form] = Form.useForm();
    const initialValues = useMemo(() => {
        return formatResumeModuleDetail(data);
    }, [data]);
    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [form, initialValues]);
    const formItems = useMemo(() => {
        return Object.keys(initialValues).map((key) => {
            const value = data[key];
            const Component = FORM_COMPONENTS_MAP[value.enType];
            return (
                <Form.Item key={key} name={key} label={value.cnType}>
                    <Component placeholder={`请输入${value.cnType}`} />
                </Form.Item>
            )
        })
    }, [data]);
    return (
        <div className={styles.detailForm}>
            <Form form={form}>{formItems}</Form>
        </div>
    )
};
export default memo(DetailFormComponent);