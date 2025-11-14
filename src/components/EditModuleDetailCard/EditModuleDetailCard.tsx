import { DragOutlined, EyeOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./EditModuleDetailCard.module.less";
const EditModuleDetailCardComponent: React.FC = () => {
    return (
        <div className={styles.container} >
            <div className={styles.draggable}><DragOutlined /></div>
            <div className={styles.content} >
                某某公司
            </div>
            <div className={styles.actions} >
                <div className={styles.action} ><EyeOutlined /></div>
                <div className={styles.action} ><DeleteOutlined /></div>
            </div>
            <div className={styles.btnDetail} ><DownOutlined className={styles.btnDetailIcon} /></div>
        </div>
    );
}
export default EditModuleDetailCardComponent;