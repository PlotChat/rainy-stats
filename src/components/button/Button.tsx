import React, { forwardRef } from "react";
import * as Base from "@base-ui/react/button";
import styles from "./Button.module.css";
import { clsx } from "../../utils/clsx";

type ButtonVariant = "filled" | "hollow";
// type BtnSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ComponentPropsWithRef<typeof Base.Button>, "className"> {
    className?: string,
	// size?: BtnSize;
	variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "filled", className = "", children, ...rest }, ref) => {
		return (
			<Base.Button {...rest} ref={ref} className={clsx(styles.button, styles[variant], className)}>
				{children}
			</Base.Button>
		);
	},
);

Button.displayName = "Button";
export default Button;
