import React from "react";
import { clsx } from "../../../../utils/clsx";
import styles from "./Widget.module.css";
import type {
	WidgetsDirectionType,
	WidgetType,
} from "../../../../types/widget-type";
import Card from "../../../../components/card/Card";
import CardImage from "../../../../components/card/card-image/CardImage";
import { motion } from "framer-motion";
import { useWidgetsUIContext } from "../../../widget-selector/context/widgets-ui-context/WidgetsUIContext";
import { BiSolidCheckboxMinus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Button from "../../../../components/button/Button";

type WidgetVariantType = "default";

interface WidgetProps extends Omit<React.ComponentProps<"div">, "className"> {
	widget?: WidgetType;
	className?: string;
	variant?: WidgetVariantType;
	widgetIndex: number;
	onClickEdges?: (widgetIndex: number, direction: WidgetsDirectionType) => void;
}

const Widget = ({
	onClickEdges,
	widget,
	widgetIndex = 0,
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
					onClick={() => onClickEdges?.(widgetIndex, "left")}
					className={clsx(styles.edge, styles.edgeLeft)}
				>
					<span>+</span>
				</Button>
			)}

			{component}

			{isEditable && (
				<Button
					onClick={() => onClickEdges?.(widgetIndex, "right")}
					className={clsx(styles.edge, styles.edgeRight)}
				>
					<span>+</span>
				</Button>
			)}

			<div className={styles.btnsWrapper}>
				<Button className={styles.editBtn}>
					<BiSolidCheckboxMinus />
				</Button>
				<Button className={styles.removeBtn}>
					<FiEdit />
				</Button>
			</div>
		</motion.div>
	);
};

export default Widget;
