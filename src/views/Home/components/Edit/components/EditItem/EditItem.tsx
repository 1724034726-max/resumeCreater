import { DragOutlined, EyeOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./EditItem.module.less";
const EditItemComponent: React.FC = () => {
    return (
        <div className={styles.editItemContainer} >
            <div className={styles.editItemDraggable}><DragOutlined /></div>
            <div className={styles.editItemContent} >
                某某公司
            </div>
            <div className={styles.editItemActions} >
                <div className={styles.editItemAction} ><EyeOutlined /></div>
                <div className={styles.editItemAction} ><DeleteOutlined /></div>
            </div>
            <div className={styles.btnDetail} >
                <DownOutlined className={styles.btnDetailIcon}/>
            </div>
        </div>
    );
}
export default EditItemComponent;