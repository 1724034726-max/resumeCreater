import styles from "./Edit.module.less";
import { memo } from "react";
import { EditOutlined } from "@ant-design/icons";
import { EditBoxComponent } from "./components";
import { useGetCurrentModule, useGetCurrentModuleDetail } from "../../context";
const EditView: React.FC = () => {
    const currentModule = useGetCurrentModule();
    const currentModuleDetail = useGetCurrentModuleDetail(currentModule);
    return (
        <div className={styles.editContainer} >
            <div className={styles.editHeader} >
                <div className={styles.editTitle} >
                    {currentModuleDetail?.cnType}
                </div>
                <div className={styles.editButton} >
                    <EditOutlined />
                </div>
            </div>
            <EditBoxComponent data={currentModuleDetail!} />
        </div>
    );
}
export default memo(EditView);