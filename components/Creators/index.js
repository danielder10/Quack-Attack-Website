import React from 'react';
import styles from './Creators.module.css';

const Creators = ({ imageUrl, name, text }) => {
  return (
    <>
    <div className={styles.creatorContainer}>
      <div className={styles.creator}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
    </>
  );
};

export default Creators;
