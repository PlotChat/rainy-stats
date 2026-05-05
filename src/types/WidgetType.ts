import type { CardProps } from "../components/card/Card";
import type { CardImageProps } from "../components/card/CardImage/CardImage";

export type WidgetsSelectorModeType = "view" | "edit";
export type WidgetsDirectionType = "left" | "right";

export type TempChosenWidgetType =
	| {
			widget?: WidgetType;
			direction: WidgetsDirectionType | null;
			index: number | null;
	  }
	| undefined;

export type BaseWidgetType = {
	colSpan: number;
	rowSpan: number;
	isPreview: boolean;
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
	| undefined;
