import React from "react";
import { clsx } from "../../../../utils/clsx";
import styles from "./Widget.module.css";
import type {
	WidgetType,
} from "../../../../types/widget-type";
import Card from "../../../../components/card/Card";
import CardImage from "../../../../components/card/card-image/CardImage";
import { motion } from "framer-motion";
import { useWidgetsUIContext } from "../../../widget-selector/context/widgets-ui-context/WidgetsUIContext";
import { FiMinusSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import Button from "../../../../components/button/Button";
import useAddWidget from "../../../widget-selector/hooks/useAddWidget";
import useRemoveWidget from "../../../widget-selector/hooks/useRemoveWidget";

type WidgetVariantType = "default";

interface WidgetProps extends Omit<React.ComponentProps<"div">, "className"> {
	widget?: WidgetType;
	className?: string;
	variant?: WidgetVariantType;
	widgetIndex: number;
}

const Widget = ({
	widget,
	widgetIndex = 0,
	className = "",
	variant = "default",
}: WidgetProps) => {
	let component;

	const { widgetsMode } = useWidgetsUIContext();
	const { handleAddOnClick } = useAddWidget();
	const { handleRemoveOnClick } = useRemoveWidget();

	if (!widget) return <Card></Card>;

	switch (widget.type) {
		case "Card":
			component = <Card {...widget.attribute}></Card>;
			break;
		case "CardImage":
			component = <CardImage {...widget.attribute}></CardImage>;
	}

	const isEditable = !widget.isPreview && widgetsMode === "edit";

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
			{isEditable && (
				<Button
					onClick={() => handleAddOnClick?.(widgetIndex, "left")}
					className={clsx(styles.edge, styles.edgeLeft)}
					intent="primary"
				>
					<span>+</span>
				</Button>
			)}

			{component}

			{isEditable && (
				<Button
					onClick={() => handleAddOnClick?.(widgetIndex, "right")}
					className={clsx(styles.edge, styles.edgeRight)}
					intent="primary"
				>
					<span>+</span>
				</Button>
			)}

			{isEditable && (
				<div className={styles.btnsWrapper}>
					<Button className={styles.editBtn} intent="primary">
						<FiEdit preserveAspectRatio="none" />
					</Button>
					<Button onClick={() => handleRemoveOnClick(widget)} className={styles.removeBtn} intent="primary">
						<FiMinusSquare preserveAspectRatio="none" />
					</Button>
				</div>
			)}
		</motion.div>
	);
};

export default Widget;
