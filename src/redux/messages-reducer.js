const addMessage = "ADD-INPUT-MESSAGE";
const updateMessage = "UPDATE-MESSAGE-TEXT";

let initState = {
    dialogs: [
        {id: 1, name: "Anton", img: 'https://sun9-81.userapi.com/c5660/u110523123/-6/z_5779c98b.jpg'},
        {
            id: 2,
            name: "Vlad",
            img: 'https://sun7-8.userapi.com/impf/c628728/v628728152/37830/m-CWsgx2cy4.jpg?size=610x915&quality=96&sign=053b74e7bf58fde62a3327baa1032bbf&type=album'
        },
        {id: 3, name: "Kolyan", img: 'https://www.meme-arsenal.com/memes/7cd42c02a6bc9ff52868a97b45edd550.jpg'},
        {
            id: 4,
            name: "Alexandro",
            img: 'https://i.etsystatic.com/isla/8433c7/36279887/isla_fullxfull.36279887_akc94h7m.jpg?version=0'
        }
    ],
    messages: [
        {id: 1, message: "it's me"},
        {id: 2, message: "Hi"}
    ],
    newMessage: ''
};

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case addMessage:
            let text = {
                id: 3,
                message: state.newMessage
            }
            return  {
                ...state,
                messages: [...state.messages, text],
                newMessage: ''
            };
        case updateMessage:
            return  {
                ...state,
                newMessage: action.newText
            };

        default:
            return state;
    }
}

export let addInputMessage = () => {
    return {
        type:addMessage
    }
};

export let updateMessageText = (text) => {
    return { type:updateMessage, newText: text}
};

export default messagesReducer;