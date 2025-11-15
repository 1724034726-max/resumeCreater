import { memo, useCallback, useState } from "react";
import styles from "./ToolIcon.module.less";
import Middleware from "@/utils/middleware";
interface ToolIconProps {
    icon: React.ReactNode;
    title: string;
    command: string;
    middleware: Middleware;
}
const ToolIcon: React.FC<ToolIconProps> = ({ icon, title, command, middleware }) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = useCallback(() => {
        middleware.emit("editor:command", command);
    }, [command, middleware]);
    return (
        <div
            className={styles.toolItem}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            onClick={handleClick}>
            {icon}
            {isActive && <div className={styles.toolItemTitle}>{title}</div>}
        </div>
    );
};
export default memo(ToolIcon);