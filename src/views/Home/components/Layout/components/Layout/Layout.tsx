import styles from "./Layout.module.less";
import LayoutModuleCard from "@/components/LayoutModuleCard";
const LayoutComponent: React.FC = () => {
    return (
        <div className={styles.layoutComponent}>
            <div className={styles.title}>
                布局
            </div>
            <div className={styles.moduleList}>
                <LayoutModuleCard title="基本信息" />
            </div>
        </div>
    );
}
export default LayoutComponent;