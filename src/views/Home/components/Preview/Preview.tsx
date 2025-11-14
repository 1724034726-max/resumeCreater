import styles from "./Preview.module.less";
import { memo } from "react";
const PreviewView: React.FC = () => {
    return (
        <div className={styles.previewContainer}>
            <h1>PreviewView</h1>
        </div>
    );
}
export default memo(PreviewView);