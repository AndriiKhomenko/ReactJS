import React from 'react';
import styles from './Button.css';

const Button = ({text, onClick}) => (
  <button className={styles.btnn} onClick={onClick}>{text}</button>
);

export default Button;