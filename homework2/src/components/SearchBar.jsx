import React from 'react';

const SearchBar = ({value, onChange}) => (
    <input 
    type="text"
    value={value}
    onChange={onChange}
    />
);

export default SearchBar;