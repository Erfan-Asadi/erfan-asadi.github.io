import React, {useState} from 'react';
import orange from './Orange.png';
import orange2 from './Orange2.png';
import orange3 from './Orange3.png';

const OtherImges = ({isShownOtherImages}) => {
    const [activeImage, setActiveImage] = useState(orange);

    return (
    <>
        <img src={activeImage} className="active-image" alt='Orange Shoes'/>
        <div className={`other-images ${isShownOtherImages && 'shown'}`}>
                <img src={orange} alt='Other 1' onMouseEnter={(e)=> setActiveImage(e.target.src)} / >
                <img src={orange2} alt='Other 2' onMouseEnter={(e)=> setActiveImage(e.target.src)} / >
                <img src={orange3} alt='Other 3' onMouseEnter={(e)=> setActiveImage(e.target.src)} / >
        </div>
    </>
  )
}

export default OtherImges