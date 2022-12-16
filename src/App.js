import React, { useState } from 'react';
import './App.css';
import ColorsList from './ColorsList';

const colorsList = [
  {
    color: '#ce0a28',
    selected: true,
    id: 1
  },
  {
    color: '#17cd61',
    selected: false,
    id: 2
  },
  {
    color: '#2d2a2d',
    selected: false,
    id: 3
  }
]
const App = () => {
  const [colors, setColors] = useState(colorsList);
  const activeColor = colors.find(color => color.selected)
  return (
    <div className='App' style={{backgroundColor: activeColor.color}}>
      <ColorsList colors={colors} setColors={setColors} />
    </div>
  )
}

export default App