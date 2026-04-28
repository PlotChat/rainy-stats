import type { WidgetListType } from "../types/widget/WidgetListType";

const currentWidgets: WidgetListType = [
	{
		type: "CardImage",
		colSpan: 4,
		rowSpan: 4,
		attribute: {
			variant: "row",
			title: "Hello there",
			body: "This is a card",
			src: "https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg",
			alt: "Flower",
		},
	},
];

export default currentWidgets;
