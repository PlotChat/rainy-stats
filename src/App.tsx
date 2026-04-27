import React from "react";
import "./app.module.css";
import CardImage from "./components/card/CardImage/CardImage";
import Button from "./components/button/Button";
import styles from './app.module.css';

const App = () => {
	return (
		<div className={styles.app}>
			<CardImage
				variant="column"
				title="Hello there"
				body="This is a card"
				src="https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg"
				alt="Flower"
			>
			<Button size="sm">I am button</Button>
			</CardImage>
		</div>
	);
};

export default App;
