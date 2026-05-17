import * as Base from "@base-ui/react/dialog";
import styles from "./dialog.module.css";
import { clsx } from "../../utils/clsx";

export interface DialogProps extends React.ComponentProps<"button"> {
	triggerText?: string;
	dialogTitle?: string;
	dialogDescription?: string;
	children?: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

const Dialog = ({
	className = "",
	triggerText = "Click me!",
	dialogTitle = "Title",
	dialogDescription,
	children,
	open,
	onOpenChange,
	...rest
}: DialogProps) => {
	return (
		<Base.Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Base.Dialog.Trigger {...rest} className={clsx(styles.button, className)}>
				{triggerText}
			</Base.Dialog.Trigger>

			<Base.Dialog.Portal>
				<Base.Dialog.Backdrop className={styles.backdrop} />
				<Base.Dialog.Popup className={styles.popup}>
					{dialogTitle && (
						<Base.Dialog.Title className={styles.title}>
							{dialogTitle}
						</Base.Dialog.Title>
					)}

					{dialogDescription && (
						<Base.Dialog.Description className={styles.description}>
							{dialogDescription}
						</Base.Dialog.Description>
					)}

					<div className={styles.content}>{children}</div>

					<div className={styles.actions}>
						<Base.Dialog.Close className={styles.button}>
							Close
						</Base.Dialog.Close>
					</div>
				</Base.Dialog.Popup>
			</Base.Dialog.Portal>
		</Base.Dialog.Root>
	);
};

export default Dialog;
