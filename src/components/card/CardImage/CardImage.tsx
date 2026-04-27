import React from "react";
import Card from "../Card";
import styles from "./CardImage.module.css";
import { clsx } from "../../../utils/clsx";

type CardImageVariant = "column" | "row";
type CardImageSize = "sm" | "md" | "lg";

interface CardImageProps extends Omit<
	React.ComponentProps<"img">,
	"className"
> {
	className?: string;
	variant?: CardImageVariant;
	size?: CardImageSize;
	title?: string;
	body?: string;
	onClick?: () => void;
}

const CardImage = ({
	className = "",
	variant = "column",
	size = "sm",
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
			className={clsx(styles.card, styles[variant], styles[size], className)}
			onClick={onClick}
		>
			<div className={styles.imageWrapper}>
				<img alt={alt} src={src}></img>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.title}>{title}</div>
				<div className={styles.content}>{body}</div>
				<div className={styles.other}>{children}</div>
			</div>
		</Card>
	);
};

export default CardImage;
