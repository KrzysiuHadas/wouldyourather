import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const Nav = (props) => {
    const userAvatar = props.avatarURL
    return (
        <AppBar position="static" color="inherit">
            <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                    <div>
                        <nav className="nav">
                            <ul>
                                {
                                    userAvatar !== '' &&
                                    <li>
                                        <NavLink to="/profile" exact >

                                            <img src={userAvatar} alt="avatar" width="35" height="35" />

                                        </NavLink>
                                    </li>
                                }
                                <li><NavLink to="/" exact > <Button>Dashboard </Button></NavLink></li>
                                <li><NavLink to="/leaderboard" exact > <Button>Leaderboard </Button></NavLink></li>
                                <li><NavLink to="/profile" exact > <Button>Profile</Button> </NavLink></li>
                                <li><NavLink to="/add" exact ><Button> New question </Button></NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;