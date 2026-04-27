import React from "react";
import "card.css";

type CardProps = React.ComponentProps<"div">;

const Card = ({
	className = "",
	id,
	children
}: CardProps) => {
	return <div className={`card ${className}`} id={id}>
        {children}
    </div>;
};

export default Card;
