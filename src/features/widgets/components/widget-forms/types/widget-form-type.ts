import type { FormProps } from "../../../../../components/form/Form";
import type { WidgetType } from "../../../../../types/widget-type";

export interface WidgetFormType extends FormProps{
    selectedWidget?: WidgetType;
}