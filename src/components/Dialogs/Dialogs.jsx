import  React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

     let dialog = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
     let message = props.messages.map(m => (<Messages message={m.message}/>));
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
};
export  default  Dialogs;
