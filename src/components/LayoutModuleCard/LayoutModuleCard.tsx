import {
  DeleteOutlined,
  DragOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import styles from "./LayoutModuleCard.module.less";
import React, { useCallback } from "react";
import { useUpdateResumeModule, useGetCurrentModule } from "@/views/Home/context";
import { useAppDispatch } from "@/hooks/useRedux";
interface LayoutModuleCardProps {
  moduleKey: string;
  title: string;
  icon?: React.ReactNode;
  draggable?: boolean;
  onHideOrShow?: () => void;
  onDelete?: () => void;
  index?: number;
  onDragStart?: (e: React.DragEvent, index: number) => void;
  onDragOver?: (e: React.DragEvent, index: number) => void;
  onDragEnd?: () => void;
}
const LayoutModuleCard: React.FC<LayoutModuleCardProps> = ({
  moduleKey,
  title,
  icon = <PlusOutlined />,
  draggable = true,
  onHideOrShow,
  onDelete,
  index,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  const dispatch = useAppDispatch();
  const currentModuleKey = useGetCurrentModule();
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

  const handleDragStartInternal = useCallback(
    (e: React.DragEvent) => {
      handleDragStart(e);
    },
    [handleDragStart]
  );

  const handleDragEndInternal = useCallback(() => {
    onDragEnd?.();
  }, [onDragEnd]);
  const handleClick = useCallback(() => {
    useUpdateResumeModule(dispatch, moduleKey);
  }, [moduleKey, dispatch]);

  return (
    <div
      className={`${styles.layoutModuleCard} ${currentModuleKey === moduleKey ? styles.selected : ""}`}
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
export default React.memo(LayoutModuleCard);
