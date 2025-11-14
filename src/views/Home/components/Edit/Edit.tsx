import { Button } from "antd";
import styles from "./Edit.module.less";
import { memo } from "react";
import { EditOutlined } from "@ant-design/icons";
import { EditBoxComponent } from "./components";
const EditView: React.FC = () => {
    return (
        <div className={styles.editContainer} >
            <div className={styles.editHeader} >
                <div className={styles.editTitle} >
                   实习经验
                </div>
                <div className={styles.editButton} >
                    <Button type="primary" icon={<EditOutlined />} size="small" />
                </div>
            </div>
            <EditBoxComponent />
        </div>
    );
}
export default memo(EditView);