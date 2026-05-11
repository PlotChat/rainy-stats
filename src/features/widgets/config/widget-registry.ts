import FormCardImage from "../components/widget-forms/form-card-image/FormCardImage";
import type { WidgetType } from "../../../types/widget-type";
import FormCard from "../components/widget-forms/form-card/FormCard";
import type { WidgetFormType } from "../components/widget-forms/types/widget-form-type";

export type WidgetConfig = {
	triggerText: string;
	dialogTitle: string;
	formComponent: React.ComponentType<WidgetFormType>;
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
