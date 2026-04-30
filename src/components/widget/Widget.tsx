import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Widget.module.css";
import type { WidgetType } from "../../types/widget/WidgetType";
import Card from "../card/Card";
import CardImage from "../card/CardImage/CardImage";
import { motion } from "framer-motion";

type WidgetVariantType = "default";

interface WidgetProps extends Omit<React.ComponentProps<"div">, "className"> {
	widget?: WidgetType;
	mode?: "default" | "edit";
	className?: string;
	variant?: WidgetVariantType;
	widgetIndex: number;
	onClickEdges?: (
		e: React.MouseEvent,
		widgetIndex: number,
		direction: "left" | "right",
	) => void;
	onHoverEdges?: (
		e: React.MouseEvent,
		widgetIndex: number,
		direction: "left" | "right",
	) => void;
}

const Widget = ({
	onHoverEdges,
	onClickEdges,
	widget,
	widgetIndex,
	className = "",
	variant = "default",
}: WidgetProps) => {
	let component;

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
			{!widget.isPreview && (
				<div
					onMouseOver={(e) => onHoverEdges?.(e, widgetIndex, "left")}
					onClick={(e) => onClickEdges?.(e, widgetIndex, "left")}
					className={clsx(styles.edge, styles.edgeLeft)}
				></div>
			)}

			{component}

			{!widget.isPreview && (
				<div
					onMouseOver={(e) => onHoverEdges?.(e, widgetIndex, "right")}
					onClick={(e) => onClickEdges?.(e, widgetIndex, "right")}
					className={clsx(styles.edge, styles.edgeRight)}
				></div>
			)}
		</motion.div>
	);
};

export default Widget;
