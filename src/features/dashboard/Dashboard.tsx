import React from "react";
import styles from "./Dashboard.module.css";
import { clsx } from "../../utils/clsx";

export interface DashboardStyles extends React.CSSProperties {
	"--grid-columns"?: number;
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
	emptyErrorMsg?: string;
	gridColumns: number;
}

type DashboardProps = DashboardGridProps;

const Dashboard = (props: DashboardProps) => {
	const {
		variant = "grid",
		className = "",
		emptyErrorMsg,
		children,
		...rest
	} = props;

	const customStyles: DashboardStyles = {};

	if (props.variant === "grid") {
		customStyles["--grid-columns"] = props.gridColumns || 8;
	}

	return (
		<>
			{(!children || React.Children.count(children) === 0) ? (
				<div className={styles.emptyErrorWrapper}>
					<h3>{emptyErrorMsg}</h3>
				</div>
			):
				<div
					style={customStyles}
					className={clsx(styles.Dashboard, styles[variant], className)}
					{...rest}
				>
					{children}
				</div>			
			}
		</>
	);
};

export default Dashboard;
