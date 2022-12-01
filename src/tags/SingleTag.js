import React from 'react';
import Styles from './SingleTag.module.css';


const SingleTag = ({title,id, clickHandler}) => {
  return (
    <strong id={id} className={Styles.tag} onClick={()=> clickHandler(id)}>
        <button>&times;</button>
         {title}
    </strong>
  )
}

export default SingleTag