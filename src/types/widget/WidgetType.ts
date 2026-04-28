import type { CardProps } from "../../components/card/Card";
import type { CardImageProps } from "../../components/card/CardImage/CardImage";

export type WidgetType =
	| { type: "Card"; attribute: CardProps; colSpan: number; rowSpan: number }
	| {
			type: "CardImage";
			attribute: CardImageProps;
			colSpan: number;
			rowSpan: number;
	  };
