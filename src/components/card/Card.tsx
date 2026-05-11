import React from "react";
import styles from "./card.module.css";
import { clsx } from "../../utils/clsx";

// type CardSize = "card--md" | "card--sm" | "card--lg";

export interface CardProps extends React.ComponentProps<"div"> {
	// size?: CardImageSize;
	title?: string;
	body?: string;
}


const Card = ({
	className = "",
	id,
	children,
	...rest
}: CardProps) => {
	return (
		<div
			{...rest}
			className={clsx(className, styles.card)}
			id={id}
		>
			{children}
		</div>
	);
};

export default Card;
