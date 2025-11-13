import {
  DeleteOutlined,
  DragOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import styles from "./LayoutModuleCard.module.less";
import { useCallback, useRef } from "react";
interface LayoutModuleCardProps {
  title: string;
  icon?: React.ReactNode;
  draggable?: boolean;
  onHideOrShow?: () => void;
  onDelete?: () => void;
  selected?: boolean;
  onSelect?: () => void;
  index?: number;
  onDragStart?: (e: React.DragEvent, index: number) => void;
  onDragOver?: (e: React.DragEvent, index: number) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  dragOverIndex?: number | null;
}
const LayoutModuleCard: React.FC<LayoutModuleCardProps> = ({
  title,
  icon = <PlusOutlined />,
  draggable = true,
  onHideOrShow,
  onDelete,
  selected,
  onSelect,
  index,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging,
  dragOverIndex,
}) => {
  const _onHideOrShow = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onHideOrShow?.();
    },
    [onHideOrShow]
  );
  const _onDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete?.();
    },
    [onDelete]
  );

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

  const isDragOver = dragOverIndex === index && !isDragging;
  const isDraggingRef = useRef(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onSelect?.();
    },
    [onSelect]
  );

  const handleDragStartInternal = useCallback(
    (e: React.DragEvent) => {
      isDraggingRef.current = true;
      handleDragStart(e);
    },
    [handleDragStart]
  );

  const handleDragEndInternal = useCallback(() => {
    isDraggingRef.current = false;
    onDragEnd?.();
  }, [onDragEnd]);

  return (
    <div
      className={`${styles.layoutModuleCard} ${selected ? styles.selected : ""
        } ${isDragging ? styles.dragging : ""} ${isDragOver ? styles.dragOver : ""
        }`}
      onClick={handleClick}
      draggable={draggable}
      onDragStart={handleDragStartInternal}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEndInternal}
    >
      <div className={styles.draggable}>{draggable && <DragOutlined />}</div>
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
