import React from 'react';
import s from "./Dialogitem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
            <div className={s.dialog}>
                <div><img src={props.img} alt=""/></div>
                <NavLink to={path}> {props.name}</NavLink>
            </div>

    )
};
 export default DialogItem;