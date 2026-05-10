import FormCardImage from "../components/widget-forms/form-card-image/FormCardImage";
import type { WidgetType } from "../../../types/widget-type";
import React from "react";
import type { FormProps } from "../../../components/form/Form";
import FormCard from "../components/widget-forms/form-card/FormCard";

export type WidgetConfig = {
	triggerText: string;
	dialogTitle: string;
	formComponent: React.ComponentType<FormProps>;
};

export const WIDGET_REGISTRY: Record<
	NonNullable<WidgetType>["type"],
	WidgetConfig
> = {
	CardImage: {
		triggerText: "Card",
		dialogTitle: "Add Card",
		formComponent: FormCardImage,
	},
	Card: {
		triggerText: "Card",
		dialogTitle: "Add Card",
		formComponent: FormCard,
	},
};
