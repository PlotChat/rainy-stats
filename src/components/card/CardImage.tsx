import React from "react";
import Card from "./Card";

type CardImageVariant = "image";

interface CardImageProps {
    variant: CardImageVariant;
	imageSrc: string; 
	imageAlt: string; 
	title?: string;
	body?: string;
	onClick?: () => void;
}

const CardImage = ({imageSrc, imageAlt, title, body, onClick, ...rest}: CardImageProps) => {
	return (
		<Card {...rest} onClick={onClick}>
			<div className={`card__image-wrapper`}>
				<img alt={imageAlt} className={`card__image`} src={imageSrc}></img>
			</div>
			<div className="card__content-wrapper">
				<div className={`card__title`}>{title}</div>
				<div className={`card__content`}>{body}</div>
			</div>
		</Card>
	);
};

export default CardImage;
