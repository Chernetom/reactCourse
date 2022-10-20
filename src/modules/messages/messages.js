import React from 'react';
import s from './messages.module.css';
import {NavLink} from "react-router-dom";

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
    let dialogsData = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} img={d.img} />);
    let messagesData = props.state.messages.map(m => <Message message={m.message} id={m.id} />);
    let newInputMessage = React.createRef();

    let sendDataNewMessage = () => {
        props.addInputMessage();
    };

    let newMessageChange = () => {
        let text = newInputMessage.current.value;
        props.updateMessagesText(text);
    }


    return(
        <div className={s.wrapper}>
{/*            <div className={s.header}>Dialogs</div>*/}
            <div className={s.dialogs}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesData}
                <div className={s.input_wrapper}>
                    <textarea onChange={newMessageChange} ref={newInputMessage} value={props.state.newMessage} placeholder="Write message" className={s.messages_input}></textarea>
                    <button onClick={sendDataNewMessage} className={s.messages_input_button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;