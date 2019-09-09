import  React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

     let dialog = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} img={d.img}/>));
     let message = props.state.messages.map(m => (<Messages message={m.message}/>));
     let addNewMessage  = React.createRef();
     let addMessage = () => {
         let newMessage = addNewMessage.current.value;
         alert(newMessage);
     }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
            <textarea name="" id="" ref={ addNewMessage }></textarea>
            <button onClick={ addMessage }> Send</button>
        </div>
    )
};
export  default  Dialogs;
