import React, { useState } from 'react';

function SearchBar(props) {

    const [value, setValue] = useState('');

    return (
        <div>
            <input type="text" id="search-bar" placeholder="Enter a title..." value={value} onChange={event => {
                setValue(event.target.value);
                props.updateSearch(event.target.value); //set search terms for future use
            }}/>
            <button id="search-clear" onClick={event => {
                setValue("");
                props.updateSearch("");
            }}>X</button>
            <button id="search-submit" onClick={event => {props.updateSearch(value)}}>Search</button>
        </div>
        
    );
}

export default SearchBar;