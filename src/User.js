import React from 'react';
import Styles from './User.module.css';


export default function User(props) {
    // const name = 'Erfan';

  return (
    <div className={Styles.user} >User: {props.name}</div>
  )
}
