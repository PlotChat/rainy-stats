import { useState } from "react";
import Dialog from "../../components/dialog/Dialog";
import type { DialogProps } from "../../components/dialog/Dialog";
import FormCardImage from "../../components/form/FormCardImage/FormCardImage";
import type { WidgetType } from "../../types/widget/WidgetType";

interface AddDialogProps extends DialogProps{
    widgetType: NonNullable<WidgetType>["type"];
    formAction?: (formData: FormData) => void;
    onSuccess?: () => void;
}

const AddDialog = ({ widgetType, formAction, onSuccess, ...rest }: AddDialogProps) => {
    const [isOpen, setIsOpen] = useState(false);

    let form: React.ReactNode;

    const handleFormAction = (formData: FormData) => {
        formAction?.(formData);
        onSuccess?.();
        setIsOpen(false);
    }
    
    switch (widgetType) {
        case "CardImage":
            form = <FormCardImage action={handleFormAction}></FormCardImage>
            break;
        default:
            break;
    }

	return (
		<Dialog {...rest} open={isOpen} onOpenChange={setIsOpen} triggerText="Add Card" dialogTitle="Add a Card">
			{form}
		</Dialog>
	);
};

export default AddDialog;
