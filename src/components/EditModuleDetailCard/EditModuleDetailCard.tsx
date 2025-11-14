import { DragOutlined, EyeOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./EditModuleDetailCard.module.less";
import { memo, useCallback, useState } from "react";
import DetailFormComponent from "./components/DetailForm/DetailForm";

interface EditModuleDetailCardComponentProps {
    data: ContentItem;
}

const EditModuleDetailCardComponent: React.FC<EditModuleDetailCardComponentProps> = ({ data }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const toggleExpand = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.draggable}><DragOutlined /></div>
                <div className={styles.content}>
                    {data[Object.keys(data)[0]].cnType}
                </div>
                <div className={styles.actions}>
                    <div className={styles.action}><EyeOutlined /></div>
                    <div className={styles.action}><DeleteOutlined /></div>
                </div>
                <div className={styles.btnDetail} onClick={toggleExpand}>
                    <DownOutlined className={`${styles.btnDetailIcon} ${expanded ? styles.rotated : ''}`} />
                </div>
            </div>
            <div className={`${styles.detailFormWrapper} ${expanded ? styles.expanded : ''}`}>
                <div className={styles.detailForm}>
                    <DetailFormComponent data={data} />
                </div>
            </div>
        </div>
    );
};

export default memo(EditModuleDetailCardComponent);