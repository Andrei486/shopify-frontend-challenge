import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        //get current url without query string
        let url = new URL(window.location.href);
        this.baseUrl = url.origin.concat(url.pathname);
        //get cached nominations if any
        let nominations = (localStorage["nominations"]) ? JSON.parse(localStorage["nominations"]) : [];

        this.state = {
            results: {"Response": "False", "Error": "Incorrect IMDb ID."},
            nominations: nominations,
            lastSearchTerm: "",
            resultsPage: 1
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.addNomination = this.addNomination.bind(this);
        this.removeNomination = this.removeNomination.bind(this);
    }

    componentDidMount() {
        let params = new URL(window.location.href).searchParams;
        let searchTerm = params.has("s") ? params.get("s") : "";
        let page = params.has("page") ? params.get("page") : 1;
        this.updateSearch(searchTerm, page);
    }

    getResults(searchTerm, page=1) {
        /*
        Returns a promise which will contain the JSON representation of the search results for the given term and page.
        The API is HTTP, not HTTPS, so this will cause a mixed content error on HTTPS pages.
        */
        var url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&type=movie&page=${page}`;
        return fetch(url);
    }

    updateResults(search, page=1) {
        /*Updates the results in this component's state.*/
        this.getResults(search, page)
            .then(response => response.json())
            .then(data => {
                this.setState({results: data});
            }
            ).catch(error => {
                console.log(`${error}`);
            }
        );
    }

    updateSearch(search, page=1) {
        /*Updates the search term and results. */
        if (search === null) {
            search = this.state.lastSearchTerm;
        }
        this.updateResults(search, page);
        this.setState({
            resultsPage: page,
            lastSearchTerm: search
        })
    }

    addNomination(movie) {
        /*Adds the given movie to the list of nominations; assumes the operation is possible. */
        let newNominations = this.state.nominations.slice();
        newNominations.push(movie);
        this.setState({nominations: newNominations});
        this.updateNominationCache(newNominations);
    }

    removeNomination(movie) {
        /*Removes the given movie from the list of nominations; assumes the operation is possible. */
        let movieIndex = this.state.nominations.indexOf(movie);
        let newNominations = this.state.nominations.slice();
        newNominations.splice(movieIndex, 1);
        this.setState({nominations: newNominations});
        this.updateNominationCache(newNominations);
    }

    updateNominationCache(nominations) {
        localStorage["nominations"] = JSON.stringify(nominations);
    }

    render() {
        let banner = (this.state.nominations.length === 5) ? (
            <div id="max-nominations" className="banner alert alert-success"><span className="p-2">Maximum number of nominations reached, thank you!</span></div>
        ) : <div/>;
        let shareLink = <div id="share-link"></div>;
        if (this.state.lastSearchTerm !== "" && this.state.results["Response"] !== "False") {
            let url = new URL(this.baseUrl);
            url.search = `s=${this.state.lastSearchTerm}&page=${this.state.resultsPage}`;
            shareLink = `Share this search: ${url.toString()}`;
        }
        return (
            <div>
                {banner}
                <div className="p-2 m-2">
                    <h1>OMDB Nominations</h1>
                    <SearchBar updateSearch={this.updateSearch}/>
                    <div id="share-link" className="p-2">{shareLink}</div>
                </div>
                <div className="container m-0">
                    <MovieList results={this.state.results}
                        nominations={this.state.nominations}
                        page={this.state.resultsPage}
                        updateSearch={this.updateSearch}
                        Add={this.addNomination}
                    />
                    <NominationList
                        nominations={this.state.nominations}
                        Remove={this.removeNomination}
                    />
                </div>
            </div>
        );
    }
}

export default App;