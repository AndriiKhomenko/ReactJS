import React from 'react';
import styles from './SearchBar.css';
import Button from './Button';

const SearchBar = ({value, onChange, onClick}) => (
  <div className={styles.search}>
    <div className={styles.container}>
      <h3 className={styles.title}>Search by title</h3>
      <input 
        className={styles.inp}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
      <Button text="Search" onClick={onClick} />
  </div>
);

export default SearchBar;