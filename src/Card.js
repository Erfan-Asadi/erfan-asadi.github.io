import React, { useState } from 'react';
import './Card.css';
import OtherImges from './OtherImges';

const Card = () => {
    const [isShownOtherImages, setIsShownOtherImages] = useState(false);

    function activeOtherImages() {
        setIsShownOtherImages(true)
    }
    function deactiveOtherImages() {
        setIsShownOtherImages(false)
    }
  return (  
    <section className='card' onMouseEnter={activeOtherImages} onMouseLeave={deactiveOtherImages}>  
        <OtherImges isShownOtherImages={isShownOtherImages} />
        <header className='card-header'>
            <h2>Everyday Runners</h2>
            <strong>$49.99</strong>
        </header>
        <span className='card-type'>Men's shoe</span>
        <span className='card-color'>3 colors</span>
        <button className='card-button'>Shop now</button>
    </section>
  )
}

export default Card