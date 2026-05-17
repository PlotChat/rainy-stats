import React, { forwardRef } from "react";
import * as Base from "@base-ui/react/button";
import styles from "./button.module.css";
import { clsx } from "../../utils/clsx";

type ButtonVariant = "filled" | "hollow";
type ButtonIntent = "default" | "primary" | "danger" | "warning";

export interface ButtonProps extends Omit<React.ComponentPropsWithRef<typeof Base.Button>, "className"> {
    className?: string;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
}

const Button = forwardRef<HTMLElement, ButtonProps>(
    ({ variant = "filled", intent = "default", className = "", children, ...rest }, ref) => {
        return (
            <Base.Button
                {...rest}
                ref={ref}
                className={clsx(styles.button, className)}
                data-variant={variant}
                data-intent={intent}
            >
                {children}
            </Base.Button>
        );
    }
);

Button.displayName = "Button";
export default Button;