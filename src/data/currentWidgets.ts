import type { WidgetListType } from "../types/widget/WidgetListType";

const currentWidgets: WidgetListType = [
	{
		type: "CardImage",
		colSpan: 2,
		rowSpan: 4,
		attribute: {
			variant: "row",
			title: "Hello there",
			body: "Hello thereHello thereHello thereHello thereHello thereHello",
			src: "https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg",
			alt: "Flower",
		},
		isPreview: false
	},
	{
		type: "CardImage",
		colSpan: 4,
		rowSpan: 2,
		attribute: {
			variant: "row",
			title: "Hello there",
			body: "This is a card",
			src: "https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg",
			alt: "Flower",
		},
		isPreview: false
	},
	{
		type: "CardImage",
		colSpan: 2,
		rowSpan: 2,
		attribute: {
			variant: "row",
			title: "Hello there",
			body: "This is a card",
			src: "https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg",
			alt: "Flower",
		},
		isPreview: false
	},
];

export default currentWidgets;
