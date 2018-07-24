import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Nav = () => {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" exact > <Button>Dashboard </Button></NavLink></li>
                    <li><NavLink to="/leaderboard" exact > <Button>Leaderboard </Button></NavLink></li>
                    <li><NavLink to="/profile" exact > <Button>Profile</Button> </NavLink></li>
                    <li><NavLink to="/add" exact ><Button> New question </Button></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;