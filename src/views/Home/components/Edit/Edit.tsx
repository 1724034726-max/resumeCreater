import styles from "./Edit.module.less";
import { memo } from "react";
const EditView: React.FC = () => {
    return (
        <div className={styles.editContainer} >
            <h1>EditView</h1>
        </div>
    );
}
export default memo(EditView);