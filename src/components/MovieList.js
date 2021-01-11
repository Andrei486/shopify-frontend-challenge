import React from "react";

function MovieList(props) {
    const movieResults = props.results;
    let movieItems, messageDiv;
    if (movieResults === null || movieResults["Response"] === "False") {
        let message = movieResults["Error"] == "Incorrect IMDb ID." ? "Search results will appear here." : movieResults["Error"];
        messageDiv = <div>{message}</div>;
    } else {
        movieItems = movieResults["Search"].map(movie => {
            let disableStatus = (props.nominations.length >= 5) || (props.nominations.includes(movie));
            let imdbLink = `https://www.imdb.com/title/${movie["imdbID"]}`;
            return (
                <li key={movie["imdbID"]}>
                    <a href={imdbLink} target="_blank" rel="noopener noreferrer">{movie["Title"]} ({movie["Year"]})</a>
                    <button disabled={disableStatus} onClick={() => props.Add(movie)}>Nominate this movie</button>
                </li>
            );
        });
    }
    return (
        <div id="movie-results" className="bg-light m-2 p-2 border border-dark rounded">
            <h2 className="p-1">Search Results</h2>
            {messageDiv}
            <ul>
                {movieItems}
            </ul>
        </div>
    );
}

export default MovieList;