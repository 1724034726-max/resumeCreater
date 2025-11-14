import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditModuleDetailCard from "@/components/EditModuleDetailCard";
import styles from "./EditBox.module.less";
import { memo } from "react";
interface EditBoxComponentProps {
    data: InfoItem;
}
const EditBoxComponent: React.FC<EditBoxComponentProps> = ({ data }) => {
    const { content: dataList, cnType } = data;
    return (
        <div className={styles.editBoxContainer} >
            {
                dataList.map((item, index) => {
                    return (
                        <EditModuleDetailCard key={
                            cnType + index
                        } data={item} />
                    )
                })
            }
            <div className={styles.editBoxButton} >
                <Button type="primary" block size="large"><PlusOutlined />添加{cnType}</Button>
            </div>
        </div>
    );
}
export default memo(EditBoxComponent);