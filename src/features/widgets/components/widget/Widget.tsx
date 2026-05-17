import React, { forwardRef, useState } from "react";
import { clsx } from "../../../../utils/clsx";
import styles from "./Widget.module.css";
import type { WidgetType } from "../../../../types/widget-type";
import Card from "../../../../components/card/Card";
import CardImage from "../../components/widget-components/card-image/CardImage";
import { motion } from "framer-motion";
import { useWidgetsUIContext } from "../../../../context/widgets-ui-context/WidgetsUIContext";
import { FiMinusSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import Button, { type ButtonProps } from "../../../../components/button/Button";
import useAddWidget from "../../hooks/useAddWidget";
import useRemoveWidget from "../../hooks/useRemoveWidget";
import EditWidgetDialog from "../widget-dialog/edit-widget-dialog/EditWidgetDialog";

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

	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
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
			className={clsx(className, styles[variant], styles.Widget)}
		>
			{isEditable && (
				<WidgetEdge
					onClick={() => handleAddOnClick?.(widgetIndex, "left")}
					intent="primary"
					className={clsx(styles.edgeLeft)}
				>
					<span>+</span>
				</WidgetEdge>
			)}

			{component}

			{isEditable && (
				<WidgetEdge
					onClick={() => handleAddOnClick?.(widgetIndex, "right")}
					intent="primary"
					className={clsx(styles.edgeRight)}
				>
					<span>+</span>
				</WidgetEdge>
			)}

			{isEditable && (
				<div className={styles.btnsWrapper}>
					<Button
						className={styles.editBtn}
						intent="primary"
						onClick={() => setIsEditDialogOpen(true)}
					>
						<FiEdit preserveAspectRatio="none" />
					</Button>
					<Button
						onClick={() => handleRemoveOnClick(widget)}
						className={styles.removeBtn}
						intent="primary"
					>
						<FiMinusSquare preserveAspectRatio="none" />
					</Button>
				</div>
			)}

			{/* Render the Dialog externally, controlled by the state */}
			{isEditable && (
				<EditWidgetDialog
					className={styles.editForm}
					isFormOpen={isEditDialogOpen}
					setIsFormOpen={setIsEditDialogOpen}
					selectedWidget={widget}
					triggerText=""
					dialogTitle={`Edit ${widget.type}`}
				/>
			)}
		</motion.div>
	);
};

// Widget's edges' component
const WidgetEdge = forwardRef<HTMLElement, ButtonProps>(
	({ className = "", intent = "primary", children, ...rest }, ref) => {
		return (
			<Button
				{...rest}
				ref={ref}
				intent={intent}
				className={clsx(styles.WidgetEdge, className)}
			>
				{children}
			</Button>
		);
	},
);

WidgetEdge.displayName = "WidgetEdge";

export default Widget;
