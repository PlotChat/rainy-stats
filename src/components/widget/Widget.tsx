import React, { useId } from "react";
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
	key?: string;
}

const Widget = ({ widget, className = "", variant = "default" }: WidgetProps) => {
	const id = useId();
	let component;

	if(!widget) return <Card></Card>

	switch (widget.type) {
		case "Card":
			component = <Card {...widget.attribute}></Card>
			break;
		case "CardImage":
			component = <CardImage {...widget.attribute}></CardImage>
	}
	
	return (
		<div key={id} style={{gridColumn: `span ${widget.colSpan}`, gridRow: `span ${widget.rowSpan}`}} className={clsx(className, styles[variant], styles.widget)}>
			{component}
		</div>
	);
};

export default Widget;
