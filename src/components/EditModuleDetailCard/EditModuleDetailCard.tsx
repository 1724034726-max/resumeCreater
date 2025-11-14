import { DragOutlined, EyeOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./EditModuleDetailCard.module.less";
import { memo } from "react";
interface EditModuleDetailCardComponentProps {
    data: ContentItem;
}
const EditModuleDetailCardComponent: React.FC<EditModuleDetailCardComponentProps> = ({ data }) => {
    return (
        <div className={styles.container} >
            <div className={styles.draggable}><DragOutlined /></div>
            <div className={styles.content} >
                {data[Object.keys(data)[0]].cnType}
            </div>
            <div className={styles.actions} >
                <div className={styles.action} ><EyeOutlined /></div>
                <div className={styles.action} ><DeleteOutlined /></div>
            </div>
            <div className={styles.btnDetail} ><DownOutlined className={styles.btnDetailIcon} /></div>
        </div>
    );
}
export default memo(EditModuleDetailCardComponent);