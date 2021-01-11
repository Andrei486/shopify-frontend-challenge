import React from "react";

class SearchBar extends React.Component {

    render() {
        return (
            <input type="text" className="search-bar" placeholder="Enter a title..." onChange={event => {
                this.searchResults(event.target.value)
                .then(response => response.json())
                .then(data => {
                    this.props.updateResults(data);
                }
                ).catch(error => {
                    console.log(`${error}`);
                }
                );
            }}/>
        );
    }

    searchResults(searchTerm, page=1) {
        var url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&type=movie&page=${page}`;
        return fetch(url);
    }
}

export default SearchBar;