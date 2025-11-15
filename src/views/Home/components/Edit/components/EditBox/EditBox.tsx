import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditModuleDetailCard from "@/components/EditModuleDetailCard";
import styles from "./EditBox.module.less";
import { memo, useCallback } from "react";
import useDrag from "@/hooks/useDrag";
import { changeOrder } from "@/views/Home/helper";
import { useAppDispatch } from "@/hooks/useRedux";
import { useChangeModuleDetailOrder } from "@/views/Home/context";

interface EditBoxComponentProps {
    data: InfoItem;
}

const EditBoxComponent: React.FC<EditBoxComponentProps> = ({ data }) => {
    const { content: dataList, cnType } = data;
    const dispatch = useAppDispatch();
    const _handleDragEnd = useCallback((fromIndex: number, toIndex: number) => {
        const newDataList = changeOrder(dataList, fromIndex, toIndex);
        useChangeModuleDetailOrder(dispatch, newDataList);
    }, [dataList, dispatch]);
    
    const { handleDragStart, handleDragOver, handleDragEnd } = useDrag({
        onDragEnd: _handleDragEnd,
    });
    return (
        <div className={styles.editBoxContainer} >
            <div className={styles.editBoxContent}>
                {dataList.map((item, index) => (
                    <EditModuleDetailCard
                        key={`${cnType}-${index}`}
                        data={item}
                        index={index}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                    />))}
            </div>
            <div className={styles.editBoxButton} >
                <Button type="primary" block size="large"><PlusOutlined />添加{cnType}</Button>
            </div>
        </div>
    );
}
export default memo(EditBoxComponent);