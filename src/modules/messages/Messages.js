import React from 'react';
import s from './Messages.module.css';
import {Navigate, NavLink} from "react-router-dom";

const Dialog = (props) => {

    return (
        <NavLink to={"" + props.id} className={navDate => navDate.isActive ? s.dialog + " " + s.active : s.dialog}>
            <img className={s.dialog_img} src={props.img} alt="#"/>
            <div className={s.dialog_name}>{props.name}</div>
        </NavLink>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Messages = (props) => {
    let dialogsData = props.messagesPage.dialogs.map(d => <Dialog id={d.id} name={d.name} img={d.img} />);
    let messagesData = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id} />);
    let newInputMessage = React.createRef();

    let sendDataNewMessage = () => {
        props.sendDataNewMessage();
    };
    let newMessageChange = () => {
        let text = newInputMessage.current.value;
        props.newMessageChange(text);
    }

    if(!props.isAuth) return <Navigate to={'/login'} />

    return(
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesData}
                <div className={s.input_wrapper}>
                    <textarea className={s.messages_input} onChange={newMessageChange} ref={newInputMessage}
                              value={props.messagesPage.newMessage} placeholder="Write message"></textarea>
                    <button className={s.messages_input_button} onClick={sendDataNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;