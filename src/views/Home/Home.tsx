import Layout from "./components/Layout";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import styles from "./Home.module.less";
export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Layout />
            <Edit />
            <Preview />
        </div>
    )
}