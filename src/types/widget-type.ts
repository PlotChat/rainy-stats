import type { CardProps } from "../components/card/Card";
import type { CardImageProps } from "../features/widgets/widget-components/card-image/CardImage";

export type WidgetsSelectorModeType = "view" | "edit";
export type WidgetsDirectionType = "left" | "right";

export type TempChosenWidgetType = {
	widget: WidgetType | null;
	direction: WidgetsDirectionType | null;
	index: number | null;
} | null;

export type BaseWidgetType = {
	colSpan: number;
	rowSpan: number;
	isPreview: boolean | null;
};

export type CardWidgetType = BaseWidgetType & {
	type: "Card";
	attribute: CardProps;
};

export type CardImageWidgetType = BaseWidgetType & {
	type: "CardImage";
	attribute: CardImageProps;
};

export type WidgetType = CardWidgetType | CardImageWidgetType | null;
