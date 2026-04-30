import type { CardProps } from "../../components/card/Card";
import type { CardImageProps } from "../../components/card/CardImage/CardImage";

export type WidgetType =
	| {
			id: string,
			type: "Card";
			colSpan: number;
			rowSpan: number;
			attribute: CardProps;
			isPreview: boolean;
	  }
	| {
			id: string,
			type: "CardImage";
			colSpan: number;
			rowSpan: number;
			attribute: CardImageProps;
			isPreview: boolean;
	  }
