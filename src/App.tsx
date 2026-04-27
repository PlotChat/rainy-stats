import React from 'react'
import './app.module.css';
import CardImage from './components/card/CardImage';

const App = () => {
  return (
    <div className="app">
      <CardImage variant="default" title="Hello there" body="This is a card" imageSrc="https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg" imageAlt="Flower">
      </CardImage>
    </div>
  )
}

export default App