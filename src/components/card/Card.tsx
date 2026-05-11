import React from "react";
import styles from "./card.module.css";
import { clsx } from "../../utils/clsx";

// type CardSize = "card--md" | "card--sm" | "card--lg";

export interface CardProps extends React.ComponentProps<"div"> {
	// size?: CardImageSize;
	title?: string;
	body?: string;
}

const Card = ({ className = "", id, title, body, children, ...rest }: CardProps) => {
	return (
		<div {...rest} className={clsx(className, styles.card)} id={id}>
			{!children && (
				<>
					<div className={styles.contentWrapper}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.body}>{body}</p>
						<div className={styles.other}>{children}</div>
					</div>
				</>
			)}
			{children}
		</div>
	);
};

export default Card;
