import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

function ExampleCarouselImage({ text }) {
  return (
    <div className={styles.carouselImage}>
      <img
        src="/images/banner1.jpg"
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;
