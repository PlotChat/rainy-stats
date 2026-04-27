import React from "react";
import type { IBaseComponentProps } from "../../types/ComponentInterface";
import "card.css";

type CardVariant = "image";

interface CardProps extends IBaseComponentProps {
	variant?: CardVariant;
	imageSrc?: string;
    imageAlt?: string;
	title?: string;
	body?: string;
	onClick?: () => void;
}

const Card = ({
	className = "",
	id,
	variant = "image",
	imageSrc,
    imageAlt,
	title,
	body,
	onClick,
}: CardProps) => {
	let cardContent: React.ReactNode;

	switch (variant) {
		case "image":
			cardContent = (
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
	return <div onClick={onClick} className={`card ${className}`} id={id}>
        {cardContent}
    </div>;
};

export default Card;
