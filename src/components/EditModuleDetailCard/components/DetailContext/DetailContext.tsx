import { memo, useRef } from "react";
import styles from "./DetailContext.module.less";
import ToolIcon from "./components/ToolIcon/ToolIcon";
import { EDIT_TOOL_LIST } from "@/constants/resume";
import RechContext from "./components/RechContext/RechContext";
import Middleware from "@/utils/middleware";
interface DetailContexComponentProps {
    data: string;
}
const DetailContexComponent: React.FC<DetailContexComponentProps> = ({ data }) => {
    const middleware = useRef(new Middleware());
    return (
        <div className={styles.detailContext}>
            <div className={styles.conTool}>
                {EDIT_TOOL_LIST.map((item) => (
                    <ToolIcon
                        key={item.title}
                        middleware={middleware.current}
                        icon={<item.icon />}
                        title={item.title}
                        command={item.command}
                    />
                ))}
            </div>
            <div className={styles.rechContext}>
                <RechContext data={data} middleware={middleware.current} />
            </div>
        </div>
    )
}
export default memo(DetailContexComponent);