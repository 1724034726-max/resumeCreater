import { useCallback, useRef } from "react";
interface UseDragProps {
  onDragStart?: (e: React.DragEvent, index: number) => void;
  onDragOver?: (e: React.DragEvent, index: number) => void;
  onDragEnd?: (fromIndex: number, toIndex: number) => void;
}
const useDrag = (options: UseDragProps) => {
  const { onDragStart, onDragOver, onDragEnd } = options;
  // 拖拽的索引
  const draggedIndexRef = useRef<number | null>(null);
  // 拖拽到的索引
  const dragOverIndexRef = useRef<number | null>(null);
  const handleDragStart = useCallback(
    (e: React.DragEvent, index: number) => {
      draggedIndexRef.current = index;
      onDragStart?.(e, index);
    },
    [onDragStart]
  );
  const handleDragOver = useCallback(
    (e: React.DragEvent, index: number) => {
      e.preventDefault();
      const currentDragged = draggedIndexRef.current;
      const currentOver = dragOverIndexRef.current;
      if (
        currentDragged === null ||
        currentDragged === index ||
        currentOver === index
      ) {
        return;
      }
      dragOverIndexRef.current = index;
      onDragOver?.(e, index);
    },
    [onDragOver]
  );
  const handleDragEnd = useCallback(() => {
    const fromIndex = draggedIndexRef.current;
    const toIndex = dragOverIndexRef.current;
    if (fromIndex !== null && toIndex !== null && fromIndex !== toIndex) {
      onDragEnd?.(fromIndex, toIndex);
    }
    draggedIndexRef.current = null;
    dragOverIndexRef.current = null;
  }, [onDragEnd]);
  return {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
export default useDrag;
