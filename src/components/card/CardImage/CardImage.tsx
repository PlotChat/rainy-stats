import React from "react";
import Card, { type CardProps } from "../Card";
import styles from "./CardImage.module.css";
import { clsx } from "../../../utils/clsx";

type CardImageVariant = "column" | "row";
// type CardImageSize = "sm" | "md" | "lg";

export interface CardImageProps extends CardProps {
	variant?: CardImageVariant;
	// size?: CardImageSize;
	alt: string;
	src: string;
	title?: string;
	body?: string;
}

const CardImage = ({
	className = "",
	variant = "column",
	// size = "sm",
	alt,
	src,
	title,
	body,
	children,
	onClick,
	...rest
}: CardImageProps) => {
	return (
		<Card
			{...rest}
			className={clsx(styles.cardImage, styles[variant], className)}
			onClick={onClick}
		>
			<div className={styles.imageWrapper}>
				<img alt={alt} src={src}></img>
			</div>
			<div className={styles.contentWrapper}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.content}>{body}</p>
				<div className={styles.other}>{children}</div>
			</div>
		</Card>
	);
};

export default CardImage;
