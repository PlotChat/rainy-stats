import type { CardProps } from "../../components/card/Card";
import type { CardImageProps } from "../../components/card/CardImage/CardImage";

export type WidgetsModeType = "view" | "edit";

export type BaseWidgetType = {
	colSpan: number;
	rowSpan: number;
	isPreview: boolean;
};

export type WidgetType = BaseWidgetType &
	(
		| {
				type: "Card";
				attribute: CardProps;
		  }
		| {
				type: "CardImage";
				attribute: CardImageProps;
		  }
	);
