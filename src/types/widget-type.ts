import type { CardProps } from "../components/card/Card";
import type { CardImageProps } from "../components/card/card-image/CardImage";

export type WidgetsSelectorModeType = "view" | "edit";
export type WidgetsDirectionType = "left" | "right";

export type TempChosenWidgetType =
	| {
			widget: WidgetType | null;
			direction: WidgetsDirectionType | null;
			index: number | null;
	  }
	| null;

export type BaseWidgetType = {
	colSpan: number;
	rowSpan: number;
	isPreview: boolean | null;
};

export type WidgetType =
	| (BaseWidgetType &
			(
				| {
						type: "Card";
						attribute: CardProps;
				  }
				| {
						type: "CardImage";
						attribute: CardImageProps;
				  }
			))
	| null;
