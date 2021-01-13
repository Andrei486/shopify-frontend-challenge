import React from "react";
import NavigationBar from "./NavigationBar";

function MovieList(props) {
    const movieResults = props.results;
    let movieItems, messageDiv, totalResults;
    if (movieResults === null || movieResults["Response"] === "False") {
        let message = movieResults["Error"] == "Incorrect IMDb ID." ? "Search results will appear here." : movieResults["Error"];
        messageDiv = <div>{message}</div>;
        totalResults = 0;
    } else {
        movieItems = movieResults["Search"].map(movie => {
            let disableStatus = (props.nominations.length >= 5) || (props.nominations.includes(movie));
            let imdbLink = `https://www.imdb.com/title/${movie["imdbID"]}`;
            return (
                <li key={movie["imdbID"]}>
                    <span width="70%" className="mr-1">
                    <a href={imdbLink} target="_blank" rel="noopener noreferrer">{movie["Title"]} ({movie["Year"]})</a>
                    </span>
                    <button disabled={disableStatus} onClick={() => props.Add(movie)}>Nominate</button>
                </li>
            );
        });
        totalResults = parseInt(movieResults["totalResults"]);
    }
    return (
        <div id="movie-results" className="bg-light p-2 border border-dark rounded">
            <h2>Search Results</h2>
            <NavigationBar page={props.page} update={props.updateSearch} totalResults={totalResults}/>
            {messageDiv}
            <ul>
                {movieItems}
            </ul>
        </div>
    );
}

export default MovieList;