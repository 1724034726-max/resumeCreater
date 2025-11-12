import styles from "./Layout.module.less";
import { LayoutComponent } from "./components";
const LayoutView: React.FC = () => {
    return (
        <div className={styles.layoutContainer}>
            <LayoutComponent />
        </div>
    );
}
export default LayoutView;