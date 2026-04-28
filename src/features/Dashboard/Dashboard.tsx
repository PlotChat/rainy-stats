import React from "react";
import styles from "./Dashboard.module.css";
import { clsx } from "../../utils/clsx";
import Widget from "../../components/widget/Widget";
import { useWidgets } from "../../context/Widgets/WidgetsContext";

type DashboardVariantType = "grid";

interface DashboardProps extends Omit<
	React.ComponentProps<"div">,
	"className"
> {
	variant?: DashboardVariantType;
	className?: string;
	children?: React.ReactNode;
}

const Dashboard = ({
	variant = "grid",
	className = "",
	children,
	...rest
}: DashboardProps) => {
	const { widgets } = useWidgets();
	const widgetsComponents = widgets.map((w, index) => (
		<Widget key={index} widget={w} className={clsx("dashboard-widget")}></Widget>
	));

	return (
		<div
			className={clsx(styles.dashboard, styles[variant], className)}
			{...rest}
		>
			{widgetsComponents}
			<div className="others">{children}</div>
		</div>
	);
};

export default Dashboard;
