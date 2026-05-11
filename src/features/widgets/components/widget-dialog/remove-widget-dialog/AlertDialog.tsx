import { AlertDialog as Base } from "@base-ui/react/alert-dialog";
import styles from "./alert-dialog.module.css";
export default function AlertDialog() {
	return (
		<Base.Root>
			
			<Base.Trigger data-color="red" className={styles.Button}>
				Discard draft
			</Base.Trigger>
			<Base.Portal>
				
				<Base.Backdrop className={styles.Backdrop} />
				<Base.Popup className={styles.Popup}>
					
					<Base.Title className={styles.Title}>
						Discard draft?
					</Base.Title>
					<Base.Description className={styles.Description}>
						
						You can't undo this action.
					</Base.Description>
					<div className={styles.Actions}>
						
						<Base.Close className={styles.Button}>
							Cancel
						</Base.Close>
						<Base.Close data-color="red" className={styles.Button}>
							
							Discard
						</Base.Close>
					</div>
				</Base.Popup>
			</Base.Portal>
		</Base.Root>
	);
}
