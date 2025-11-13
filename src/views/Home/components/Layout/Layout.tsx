import styles from "./Layout.module.less";
import { LayoutComponent } from "./components";
import { memo } from "react";
const LayoutView: React.FC = () => {
    return (
        <div className={styles.layoutContainer}>
            <LayoutComponent />
        </div>
    );
}
export default memo(LayoutView);