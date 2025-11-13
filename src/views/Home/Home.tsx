import Layout from "./components/Layout";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import styles from "./Home.module.less";
import { useGetResume } from "./context";
export default function Home() {
    const resume = useGetResume();
    console.log("resume", resume);
    return (
        <div className={styles.homeContainer}>
            <Layout />
            <Edit />
            <Preview />
        </div>
    )
}