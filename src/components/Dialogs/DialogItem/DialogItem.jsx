import React from 'react';
import s from "./Dialogitem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
            <div className={s.dialog}>
                <NavLink to={path}> {props.name}</NavLink>
            </div>

    )
};
 export default DialogItem;