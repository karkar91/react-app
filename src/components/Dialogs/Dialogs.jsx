import  React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = ( ) => {
     let dialogs = [
         {id:1,name:'Dimych'},
         {id:2,name:'Vasya'},
         {id:3,name:'Bldo'},
     ];

     let messages = [
         {id:1, message:'Hi!!!!'},
         {id:2, message:'How are you?'},
         {id:3, message:'yahoooo!!!'},
     ];

     let dialog = dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
     let message = messages.map(m => (<Messages message={m.message}/>));
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
