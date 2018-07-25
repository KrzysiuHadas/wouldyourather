import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Nav = (props) => {
    const userAvatar = props.avatarURL
    return (
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
    );
};

export default Nav;