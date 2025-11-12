import { DeleteOutlined, DragOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./LayoutModuleCard.module.less";
import { useCallback } from "react";
interface LayoutModuleCardProps {
    title: string;
    icon?: React.ReactNode;
    draggable?: boolean;
    onHideOrShow?: () => void;
    onDelete?: () => void;
}
const LayoutModuleCard: React.FC<LayoutModuleCardProps> = ({ title, icon = <PlusOutlined />, draggable = true, onHideOrShow, onDelete }) => {
    const _onHideOrShow = useCallback(() => {
        onHideOrShow?.();
    }, [onHideOrShow]);
    const _onDelete = useCallback(() => {
        onDelete?.();
    }, [onDelete]);
    return (
        <div className={styles.layoutModuleCard}>
            <div className={styles.draggable}>
                {draggable && (
                    <DragOutlined />
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.actions}>
                <div className={styles.action}>
                    <EyeOutlined onClick={_onHideOrShow} />
                </div>
                <div className={styles.action}>
                    <DeleteOutlined onClick={_onDelete} />
                </div>
            </div>
        </div>
    );
};
export default LayoutModuleCard;