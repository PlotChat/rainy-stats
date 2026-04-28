import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { clsx } from "../../utils/clsx";
import type { WidgetListType } from "../../types/widget/WidgetListType";
import { getCurrentWidgets } from "../../data/getCurrentWidgets";
import currentWidgetsData from "../../data/currentWidgets";
import Widget from "../../components/widget/Widget";

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
	const [widgets, setWidgets] = useState<WidgetListType>(() =>
		getCurrentWidgets(currentWidgetsData),
	);

	const widgetsComponents = widgets.map((w) => (
		<Widget widget={w} className={clsx("dashboard-widget")}></Widget>
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
