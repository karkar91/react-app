import React from 'react';
import s from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
                <div className={s.dialog}>
                    Bldo
                </div>
            </div>
                <div className={s.messages}>
                <div className={s.message}>
                    Hi!!!
                </div>
                <div className={s.message}>
                    How are you ?
                </div>
                <div className={s.message}>
                    yahooooooo!!!!!
                </div>
            </div>
        </div>
    )
};
export default Dialog;
