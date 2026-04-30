import type { CardProps } from "../../components/card/Card";
import type { CardImageProps } from "../../components/card/CardImage/CardImage";

export type WidgetType =
	| {
			type: "Card";
			colSpan: number;
			rowSpan: number;
			attribute: CardProps;
	  }
	| {
			type: "CardImage";
			colSpan: number;
			rowSpan: number;
			attribute: CardImageProps;
	  };
