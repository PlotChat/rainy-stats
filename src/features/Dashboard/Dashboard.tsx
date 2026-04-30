import React from "react";
import styles from "./Dashboard.module.css";
import { clsx } from "../../utils/clsx";

export interface DashboardStyles extends React.CSSProperties {
    "--grid-cols"?: number;
}

type DashboardVariantType = "grid";

interface DashboardBaseProps extends Omit<
	React.ComponentProps<"div">,
	"className" | "style"
> {
	variant?: DashboardVariantType;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

// Grid variant props
interface DashboardGridProps extends DashboardBaseProps {
	variant?: "grid";
	gridCols: number;
}

type DashboardProps = DashboardGridProps;

const Dashboard = (props: DashboardProps) => {
	const {
		variant = "grid",
		className = "",
		children,
		...rest
	} = props;

	const customStyles: DashboardStyles = {};

	if (props.variant === "grid") {
		customStyles["--grid-cols"] = props.gridCols || 8;
	}

	return (
		<div
			style={customStyles}
			className={clsx(styles.dashboard, styles[variant], className)}
			{...rest}
		>
			{children}
		</div>
	);
};

export default Dashboard;
