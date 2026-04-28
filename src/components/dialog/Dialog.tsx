import * as Base from "@base-ui/react/dialog";
import styles from "./Dialog.module.css";
import { clsx } from "../../utils/clsx";

export interface DialogProps extends React.ComponentProps<"button"> {
    triggerText?: string;
    dialogTitle?: string;
    children?: React.ReactNode;
}

const Dialog = ({
    className = "",
    triggerText = "Click me!",
    dialogTitle = "Title",
    children,
    ref,
    ...rest 
}: DialogProps) => {
    
    return (
        <Base.Dialog.Root>
            <Base.Dialog.Trigger 
                ref={ref} 
                {...rest} 
                className={clsx(styles.Button, className)}
            >
                {triggerText}
            </Base.Dialog.Trigger>
            
            <Base.Dialog.Portal>
                <Base.Dialog.Backdrop className={styles.Backdrop} />
                <Base.Dialog.Popup className={styles.Popup}>
                    
                    {dialogTitle && (
                        <Base.Dialog.Title className={styles.Title}>
                            {dialogTitle}
                        </Base.Dialog.Title>
                    )}
                    
                    <Base.Dialog.Description className={styles.Description}>
                        {children}
                    </Base.Dialog.Description>
                    
                    <div className={styles.Actions}>
                        <Base.Dialog.Close className={styles.Button}>
                            Close
                        </Base.Dialog.Close>
                    </div>
                </Base.Dialog.Popup>
            </Base.Dialog.Portal>
        </Base.Dialog.Root>
    );
};

export default Dialog;