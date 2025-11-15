import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./RechContext.module.less";
import Middleware from "@/utils/middleware";
// import sanitizeHTML from "@/utils/sanitizeHTML";

interface RechContextProps {
    data?: string; 
    middleware: Middleware;
}

const RechContext: React.FC<RechContextProps> = ({ data = '', middleware }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        if (editorRef.current && data && !hasMounted) {
            editorRef.current.innerHTML = data;
            setHasMounted(true);
        }
    }, [data, hasMounted]);

    const handleInput = useCallback(() => {
        // const value = editorRef.current?.innerHTML;
    }, []);

    useEffect(() => {
        const handler = (command: string, value?: string) => {
            editorRef.current?.focus();
            document.execCommand(command, false, value);
            handleInput();
        };
        middleware.on("editor:command", handler);
        return () => {
            middleware.off("editor:command", handler);
        };
    }, [middleware, handleInput]);

    return (
        <div
            className={styles.rechContext}
            ref={editorRef}
            contentEditable
            onInput={handleInput}
        />
    );
};

export default memo(RechContext);