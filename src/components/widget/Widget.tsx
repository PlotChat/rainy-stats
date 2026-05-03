import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Widget.module.css";
import type { WidgetsDirectionType, WidgetType } from "../../types/WidgetType";
import Card from "../card/Card";
import CardImage from "../card/CardImage/CardImage";
import { motion } from "framer-motion";
import { useWidgetsUIContext } from "../../features/WidgetSelector/context/WidgetsUIContext.tsx/WidgetsUIContext";

type WidgetVariantType = "default";

interface WidgetProps extends Omit<React.ComponentProps<"div">, "className"> {
	widget?: WidgetType;
	className?: string;
	variant?: WidgetVariantType;
	widgetIndex?: number;
	onClickEdges?: (widgetIndex: number, direction: WidgetsDirectionType) => void;
}

const Widget = ({
	onClickEdges,
	widget,
	widgetIndex,
	className = "",
	variant = "default",
}: WidgetProps) => {
	let component;

	const { widgetsMode } = useWidgetsUIContext();

	if (!widget) return <Card></Card>;

	switch (widget.type) {
		case "Card":
			component = <Card {...widget.attribute}></Card>;
			break;
		case "CardImage":
			component = <CardImage {...widget.attribute}></CardImage>;
	}

	return (
		<motion.div
			layout
			initial={{ opacity: 0, scale: 0.8 }}
			exit={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
			style={{
				gridColumn: `span ${widget.colSpan}`,
				gridRow: `span ${widget.rowSpan}`,
			}}
			className={clsx(className, styles[variant], styles.widget)}
		>
			{!widget.isPreview && widgetsMode === "edit" && widgetIndex && (
				<div
					onClick={() => onClickEdges?.(widgetIndex, "left")}
					className={clsx(styles.edge, styles.edgeLeft)}
				>
					<span>+</span>
				</div>
			)}

			{component}

			{!widget.isPreview && widgetsMode === "edit" && widgetIndex && (
				<div
					onClick={() => onClickEdges?.(widgetIndex, "right")}
					className={clsx(styles.edge, styles.edgeRight)}
				>
					<span>+</span>
				</div>
			)}
		</motion.div>
	);
};

export default Widget;
