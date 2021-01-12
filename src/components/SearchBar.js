import React from "react";

function SearchBar(props) {

    return (
        <input type="text" className="search-bar" placeholder="Enter a title..." onChange={event => {
            props.updateSearch(event.target.value); //set search terms for future use
        }}/>
    );
}

export default SearchBar;