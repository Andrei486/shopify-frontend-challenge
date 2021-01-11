import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: {"Response": "False", "Error": "Incorrect IMDb ID."},
            nominations: [],
        }
        this.updateResults = this.updateResults.bind(this);
        this.addNomination = this.addNomination.bind(this);
        this.removeNomination = this.removeNomination.bind(this);
    }

    updateResults(results) {
        /*Updates the results in this component's state.*/
        this.setState({results: results});
    }

    addNomination(movie) {
        /*Adds the given movie to the list of nominations; assumes the operation is possible. */
        let newNominations = this.state.nominations.slice();
        newNominations.push(movie);
        this.setState({nominations: newNominations});
    }

    removeNomination(movie) {
        /*Removes the given movie from the list of nominations; assumes the operation is possible. */
        let movieIndex = this.state.nominations.indexOf(movie);
        let newNominations = this.state.nominations.slice();
        newNominations.splice(movieIndex, 1);
        this.setState({nominations: newNominations});
    }

    render() {
        return (
            <div>
                <div className="p-2 m-2"> 
                    <h1>OMDB Nominations</h1>
                    <SearchBar updateResults={this.updateResults}/>
                </div>
                <div className="container m-0 bg-light">
                    <MovieList results={this.state.results} nominations={this.state.nominations} Add={this.addNomination}></MovieList>
                    <NominationList nominations={this.state.nominations} Remove={this.removeNomination}></NominationList>
                </div>
            </div>
        );
    }
}

export default App;