import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ setSearch }) => {

    // Click handler to set the search state

    const clickHandler = (link) => {
        setSearch(link.target.text)
    }

    // Display navigation

    return (
        <nav className="main-nav">
            <ul>
                <li onClick={clickHandler}><Link to='cats'>Cats</Link></li>
                <li onClick={clickHandler}><Link to='dogs'>Dogs</Link></li>
                <li onClick={clickHandler}><Link to='computers'>Computers</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;