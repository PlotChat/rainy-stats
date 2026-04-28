import React from "react";
import styles from "./Card.module.css";

type CardSize = "card--md" | "card--sm" | "card--lg";

export interface CardProps extends React.ComponentProps<"div"> {
	size?: CardSize;
}

const Card = ({
	className = "",
	id,
	// size = "card--md",
	children,
	...rest
}: CardProps) => {
	return (
		<div
			{...rest}
			className={`${className} ${styles.card}`.trim()}
			id={id}
		>
			{children}
		</div>
	);
};

export default Card;
