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
                    <span>{movie["Title"]} ({movie["Year"]})</span>
                    <button onClick={() => props.Remove(movie)}>Remove from nominations</button>
                </li>
            );
        });
    }
    return (
        <div id="nomination-list" className="bg-light m-2 p-2 border border-dark rounded">
            <h2 className="p-1">Current Nominations ({nominations.length} / 5)</h2>
            {message}
            <ul>
                {nominationItems}
            </ul>
        </div>
    );
}

export default NominationList;