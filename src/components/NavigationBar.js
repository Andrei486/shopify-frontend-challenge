import React from 'react';

function NavigationBar(props) {
    const page = props.page;
    const totalResults = props.totalResults;
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            <NavButton text="First" page={1} active={false} total={totalResults} update={props.update}/>
            <NavButton text="Previous" page={page-1} active={false} total={totalResults} update={props.update}/>
            <NavButton text={page.toString()} page={page} active={true} total={totalResults} update={props.update}/>
            <NavButton text="Next" page={page+1} active={false} total={totalResults} update={props.update}/>
            <NavButton text="Last" page={Math.ceil((totalResults+1)/10)} active={false} total={totalResults} update={props.update}/>
        </ul>
        </nav>
    );
}

function NavButton(props) {
    let elementClass = "page-item";
    if (props.active) {
        elementClass = elementClass.concat(" ", "active");
    } else if (!isValidPage(props.page, props.total)){
        elementClass = elementClass.concat(" ", "disabled");
    }
    return (
        <li className={elementClass}>
            <a
                className="page-link"
                onClick={clickHandler(() => props.update(null, props.page), isValidPage(props.page, props.total), props.active)}
            >{props.text}</a>
        </li>
    );
}

function clickHandler(update, isValid, forceDisable) {
    return (isValid && !forceDisable) ? update: () => null;
}

function isValidPage(page, totalResults) {
    /*
    Returns true if and only if the given page number is valid for the given number of results.
    There are up to 10 results per page (API response format) and page numbers start at 1.
    */
    const firstResult = 1 + 10*(page-1);
    const lastResult = Math.min(10*page, totalResults);
    return (page > 0) && (firstResult <= lastResult);
}

export default NavigationBar;