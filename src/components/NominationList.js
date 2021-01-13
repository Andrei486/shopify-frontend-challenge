import React from 'react';

function NominationList(props) {
    const nominations = props.nominations;
    let nominationItems, message;
    if (nominations.length === 0) {
        message = <div>No nominations- add some by searching for movies!</div>;
    } else {
        nominationItems = props.nominations.map(movie => {
            return (
                <li key={movie["Title"]}>
                    <span className="mr-1">{movie["Title"]} ({movie["Year"]})</span>
                    <button onClick={() => props.Remove(movie)}>Remove</button>
                </li>
            );
        });
    }
    return (
        <div id="nomination-list" className="bg-light mx-2 p-2 border border-dark rounded">
            <h2>Current Nominations ({nominations.length} / 5)</h2>
            {message}
            <ul>
                {nominationItems}
            </ul>
        </div>
    );
}

export default NominationList;