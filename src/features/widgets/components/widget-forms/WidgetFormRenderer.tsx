import React from "react";
import type { WidgetType } from "../../../../types/widget-type";
import Form from "../../../../components/form/Form";
import FormCardImage from "./form-card-image/FormCardImage";

interface WidgetFormRendererProps {
	type: NonNullable<WidgetType>["type"];
}

const WidgetFormRenderer = ({
	type,
}: WidgetFormRendererProps): React.ReactElement<typeof Form> => {
	switch (type) {
		case "CardImage":
			return <FormCardImage></FormCardImage>;
		default:
			throw new Error(
				`WidgetFormRenderer does not implement form type for component: ${type}`,
			);
	}
};

export default WidgetFormRenderer;
