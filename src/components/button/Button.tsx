import React, { forwardRef } from "react";
import * as Base from "@base-ui/react/button";
import styles from "./Button.module.css";
import { clsx } from "../../utils/clsx";

type ButtonVariant = "filled" | "hollow";
type ButtonIntent = "default" | "primary" | "danger" | "warning";
// type BtnSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<
	React.ComponentPropsWithRef<typeof Base.Button>,
	"className"
> {
	className?: string;
	// size?: BtnSize;
	variant?: ButtonVariant;
	intent?: ButtonIntent;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "filled",
			intent = "default",
			className = "",
			children,
			...rest
		},
		ref,
	) => {
		return (
			<Base.Button
				{...rest}
				ref={ref}
				className={clsx(
					styles.button,
					intent !== "default" ? styles[intent] : "",
					variant !== "filled" ? styles[variant]: "",
					className,
				)}
			>
				{children}
			</Base.Button>
		);
	},
);

Button.displayName = "Button";
export default Button;
