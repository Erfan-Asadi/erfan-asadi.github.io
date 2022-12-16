import React from 'react'
import Color from './Color'

const ColorsList = ({colors, setColors}) => {
  return (
    <div className='colors-container'>
        {colors.map((colorItem, index)=> <Color key={index} colorItem={colorItem} setColors={setColors} />)}
    </div>
  )
}

export default ColorsList