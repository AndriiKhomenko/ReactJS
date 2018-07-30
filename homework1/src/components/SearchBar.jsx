import React from 'react';
import styles from './SearchBar.css';

const SearchBar = ({value, onChange}) => (
    <div className={styles.search}>
        <h2>Find your book</h2>
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </div>
);

export default SearchBar;
