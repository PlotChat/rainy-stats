import React from "react";
import Card from "./Card";

type CardImageVariant = "default";

interface CardImageProps {
	variant: CardImageVariant;
	imageSrc: string;
	imageAlt: string;
	title?: string;
	body?: string;
	onClick?: () => void;
}

const CardImage = ({
	variant = "default",
	imageSrc,
	imageAlt,
	title,
	body,
	onClick,
	...rest
}: CardImageProps) => {
	let cardImageContent;
	switch (variant) {
		case "default":
			cardImageContent = (
				<>
					<div className={`card__image-wrapper`}>
						<img alt={imageAlt} className={`card__image`} src={imageSrc}></img>
					</div>
					<div className="card__content-wrapper">
						<div className={`card__title`}>{title}</div>
						<div className={`card__content`}>{body}</div>
					</div>
				</>
			);
			break;

		default:
			break;
	}
	return (
		<Card {...rest} onClick={onClick}>
			{cardImageContent}
		</Card>
	);
};

export default CardImage;
