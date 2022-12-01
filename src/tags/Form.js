import React, { useState } from 'react';
import Styles from './Form.module.css';

const Form = ({tagValueHandler}) => {
    const [tagValue, setTagValue] = useState('');

  return (
    <form className={Styles.form} onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Add new tag" onChange={(e)=> setTagValue(e.target.value)} />
        <button onClick={()=> tagValueHandler(tagValue)}>Add</button>
    </form>
  )
}

export default Form