interface LayoutModuleCardProps {
    title: string;
    icon?: React.ReactNode;
    draggable?: boolean;
    onHideOrShow?: () => void;
    onDelete?: () => void;
}
const LayoutModuleCard: React.FC<LayoutModuleCardProps> = ({ title, icon, draggable, onHideOrShow, onDelete }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
export default LayoutModuleCard;