import { DragOutlined, EyeOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./EditModuleDetailCard.module.less";
import { memo, useCallback, useState } from "react";
import DetailFormComponent from "./components/DetailForm/DetailForm";

interface EditModuleDetailCardComponentProps {
    data: ContentItem;
    draggable?: boolean;
    index?: number;
    onDragStart?: (e: React.DragEvent, index: number) => void;
    onDragOver?: (e: React.DragEvent, index: number) => void;
    onDragEnd?: () => void;
}

const EditModuleDetailCard: React.FC<EditModuleDetailCardComponentProps> = ({ data, draggable = true, index, onDragStart, onDragOver, onDragEnd }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const toggleExpand = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);
    const handleDragStart = useCallback(
        (e: React.DragEvent) => {
            if (draggable && index !== undefined && onDragStart) {
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/html", String(index));
                onDragStart(e, index);
            }
        },
        [draggable, index, onDragStart]
    );
    const handleDragOver = useCallback(
        (e: React.DragEvent) => {
            if (draggable && index !== undefined && onDragOver) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                onDragOver(e, index);
            }
        },
        [draggable, index, onDragOver]
    );
    const handleDragStartInternal = useCallback((e: React.DragEvent) => {
        handleDragStart(e);
    }, [handleDragStart]);

    const handleDragEndInternal = useCallback(() => {
        onDragEnd?.();
    }, [onDragEnd]);
    return (
        <div className={styles.container}>
            <div
                className={styles.mainContent}
                draggable={draggable}
                onDragStart={handleDragStartInternal}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEndInternal}>
                {draggable && <div className={styles.draggable}><DragOutlined /></div>}
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

export default memo(EditModuleDetailCard);