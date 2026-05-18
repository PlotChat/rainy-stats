import React from "react";
import styles from "./Dashboard.module.css";
import { clsx } from "../../utils/clsx";

export interface DashboardStyles extends React.CSSProperties {
    "--grid-columns"?: number;
}

type DashboardVariantType = "grid";

interface DashboardBaseProps extends Omit<React.ComponentProps<"div">, "className" | "style"> {
    variant?: DashboardVariantType;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    emptyErrorMsg?: string;
    isEmpty?: boolean; 
}

interface DashboardGridProps extends DashboardBaseProps {
    variant?: "grid";
    gridColumns: number;
}

type DashboardProps = DashboardGridProps;

const Dashboard = (props: DashboardProps) => {
    const { 
        variant = "grid", 
        className = "", 
        emptyErrorMsg, 
        isEmpty = false, 
        children, 
        ...rest 
    } = props;

    const customStyles: DashboardStyles = {};

    if (variant === "grid") {
        customStyles["--grid-columns"] = props.gridColumns || 8;
    }

    return (
        <>
            {isEmpty && (
                <div className={clsx(styles.emptyState, "text-center")}>
                    <h4>{emptyErrorMsg}</h4>
                </div>
            )}
            
            {!isEmpty && (
                <div
                    style={customStyles}
                    className={clsx(styles.Dashboard, className)}
                    data-variant={variant} 
                    {...rest}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default Dashboard;