import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./Widget.module.css";
import type { WidgetType } from "../../types/widget/WidgetType";
import Card from "../card/Card";
import CardImage from "../card/CardImage/CardImage";

type WidgetVariantType = "default";

interface WidgetProps extends Omit<React.ComponentProps<"div">, "className"> {
    widget?: WidgetType;
	className?: string;
	variant?: WidgetVariantType;
}

const Widget = ({ widget, className = "", variant = "default" }: WidgetProps) => {
	let componentType;

	if(!widget) return <Card></Card>

	switch (widget.type) {
		case "Card":
			componentType = <Card {...widget.attribute}></Card>
			break;
		case "CardImage":
			componentType = <CardImage {...widget.attribute}></CardImage>
	}
	
	return (
		<div style={{gridColumn: `span ${widget.colSpan}`, gridRow: `span ${widget.rowSpan}`}} className={clsx(className, styles[variant], styles.widget)}>
			{componentType}
		</div>
	);
};

export default Widget;
