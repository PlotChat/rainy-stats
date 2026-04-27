import React, { forwardRef } from "react";
import * as Base from "@base-ui/react/button";
import styles from "./Button.module.css";
import { clsx } from "../../utils/clsx";

type BtnVariant = "filled" | "hollow";
type BtnSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ComponentPropsWithRef<typeof Base.Button>, "className"> {
    className?: string,
	size?: BtnSize;
	variant?: BtnVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ size = "md", variant = "filled", className = "", children, ...rest }, ref) => {
		return (
			<Base.Button {...rest} ref={ref} className={clsx(styles.btn, styles[size], styles[variant], className)}>
				{children}
			</Base.Button>
		);
	},
);

Button.displayName = "Button";
export default Button;
