import  React from 'react';
import  s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
const  Navbar = (props) => {
    return (
        <nav className = {s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialog'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a >News</a>
            </div>
            <div className={s.item}>
                <a >Settings</a>
            </div>

            <div className={s.friend}>
                <div className={s.friendSection}>Friends</div>
               <Friends state={props.state}/>
            </div>
        </nav>
    )
};
export default  Navbar;
