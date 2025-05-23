import React from 'react';
import styles from './Card.module.css';

const Card = ({children, className}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>{children}</div>
  );
};

export default Card;
