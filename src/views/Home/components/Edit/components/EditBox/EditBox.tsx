import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditModuleDetailCard from "@/components/EditModuleDetailCard";
import styles from "./EditBox.module.less";
interface EditBoxComponentProps {
    dataList: ContentItem[];
}
const EditBoxComponent: React.FC<EditBoxComponentProps> = ({ dataList }) => {
    return (
        <div className={styles.editBoxContainer} >
            {
                dataList.map((item, index) => {
                    return (
                        <EditModuleDetailCard key={index} data={item}/>
                    )
                })
            }
            <div className={styles.editBoxButton} >
                <Button type="primary" block size="large"><PlusOutlined />添加实习经历</Button>
            </div>
        </div>
    );
}
export default EditBoxComponent;