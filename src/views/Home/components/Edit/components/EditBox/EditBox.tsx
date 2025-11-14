import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditItemComponent from "../EditItem/EditItem";
import styles from "./EditBox.module.less";
const EditBoxComponent: React.FC = () => {
    return (
        <div className={styles.editBoxContainer} >
            <EditItemComponent />
            <div className={styles.editBoxButton} >
                <Button type="primary" block size="large">添加实习经历</Button>
            </div>
        </div>
    );
}
export default EditBoxComponent;