import {addInputMessage, updateMessageText} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let messagesState = (state) => {
    return {
        messagesPage: state.messagesPage,
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

/*let AuthRedirectComponent = withAuthRedirect(messages);

const MessagesContainer = connect (messagesState, messagesDispatch) (AuthRedirectComponent);*/

export default compose(
    connect (messagesState, messagesDispatch),
    withAuthRedirect
)(Messages);