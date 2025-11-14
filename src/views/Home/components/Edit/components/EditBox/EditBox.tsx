import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditModuleDetailCard from "@/components/EditModuleDetailCard";
import styles from "./EditBox.module.less";
const EditBoxComponent: React.FC = () => {
    return (
        <div className={styles.editBoxContainer} >
            <EditModuleDetailCard />
            <div className={styles.editBoxButton} >
                <Button type="primary" block size="large"><PlusOutlined />添加实习经历</Button>
            </div>
        </div>
    );
}
export default EditBoxComponent;