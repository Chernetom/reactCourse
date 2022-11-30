import {addInputMessage, updateMessageText} from "../../redux/messages-reducer";
import Messages from "./messages";
import {connect} from "react-redux";

let messagesState = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let messagesDispatch = (dispatch) => {
    return {
        sendDataNewMessage: () => {
            dispatch(addInputMessage());
        },
        newMessageChange: (text) => {
            dispatch(updateMessageText(text));
        }
    }
}
const MessagesContainer = connect (messagesState, messagesDispatch) (Messages);

export default MessagesContainer;