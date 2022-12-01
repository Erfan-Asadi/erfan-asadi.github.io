import React, { useState } from 'react'

const Form = ({handleClick}) => {
    const [tagValue, setTagValue] = useState('');

    function handleButton() {
        if(tagValue === '') return;
        
        handleClick(tagValue);
        setTagValue('');
    }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='Add new tag' onChange={(e) => setTagValue(e.target.value)} value={tagValue} />
        <button type='button' onClick={handleButton}>ADD</button>
    </form>
  )
}

export default Form