import Layout from "./components/Layout";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import styles from "./Home.module.less";
import { useGetResume, useUpdateResumeModule } from "./context";
import { useAppDispatch } from "@/hooks/redux";
export default function Home() {
    const dispatch = useAppDispatch();
    const resume = useGetResume();
    console.log("resume", resume);
    return (
        <div className={styles.homeContainer}>
             <div onClick={() => useUpdateResumeModule(dispatch, "1243")}>1243</div>
            <Layout />
            <Edit />
            <Preview />
        </div>
    )
}