import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Friends.module.css'

const MyFriends = (props) => {
    let url = '/friend'+ props.id;

    return (
        <div className={s.friendsBlock}>
            <div className={s.friendImage}><img src={props.img} alt=""/></div>
            <div className={s.friendName}><NavLink to={url}> {props.name}</NavLink></div>
        </div>
    )
};
export  default MyFriends;