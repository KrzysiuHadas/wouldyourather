import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="nav">
                <ul >
                    <li><NavLink to="/" exact > Dashboard </NavLink></li>
                    <li><NavLink to="/leaderboard" exact > Leaderboard </NavLink></li>
                    <li><NavLink to="/profile" exact > Profile </NavLink></li>
                    <li><NavLink to="/add" exact > New question </NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;