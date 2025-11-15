import { memo } from "react";
interface DetailContexComponentProps {
    data: string;
}
const DetailContexComponent: React.FC<DetailContexComponentProps> = ({ data }) => {
    return (
        <div>{data}</div>
    )
}
export default memo(DetailContexComponent);