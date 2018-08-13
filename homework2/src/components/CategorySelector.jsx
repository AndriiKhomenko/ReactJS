import React from 'react';
import Select from 'react-select';
import styles from './CategorySelector.css';

const CategorySelector = prop => (
  <div className={styles.container_2}>
    <h3 className={styles.title}>Select by category</h3>
    <Select {...prop} />
  </div>
);

export default CategorySelector;