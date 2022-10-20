let rerenderAllTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {descr:"Today i'm going to Defense of the Ancients", like:"15"},
            {descr:"Hi i'm here", like:"21"}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id:1, name:"Anton", img:'https://sun9-81.userapi.com/c5660/u110523123/-6/z_5779c98b.jpg'},
            {id:2, name:"Vlad", img:'https://sun7-8.userapi.com/impf/c628728/v628728152/37830/m-CWsgx2cy4.jpg?size=610x915&quality=96&sign=053b74e7bf58fde62a3327baa1032bbf&type=album'},
            {id:3, name:"Kolyan", img:'https://i.kym-cdn.com/photos/images/facebook/001/562/649/6f0.jpg'},
            {id:4, name:"Alexandro", img:'https://i.etsystatic.com/isla/8433c7/36279887/isla_fullxfull.36279887_akc94h7m.jpg?version=0'}
        ],
        messages: [
            {id:1, message: "it's me"},
            {id:2, message: "Hi"}
        ],
        newMessage: ''
    },
    friendsStatus: {
        lastActive: [
            {img:'https://sun9-81.userapi.com/c5660/u110523123/-6/z_5779c98b.jpg', status:'online'},
            {img:'https://sun7-8.userapi.com/impf/c628728/v628728152/37830/m-CWsgx2cy4.jpg?size=610x915&quality=96&sign=053b74e7bf58fde62a3327baa1032bbf&type=album', status:'last seen 40 min'},
            {img:'https://i.etsystatic.com/isla/8433c7/36279887/isla_fullxfull.36279887_akc94h7m.jpg?version=0', status: 'last seen yesterday'}
        ]
    }
}

export let addPost = () => {
    let post = {
        descr: state.profilePage.newPostText,
        like: "0"
    };
    state.profilePage.posts.push(post);
    rerenderAllTree(state);
    state.profilePage.newPostText = '';
}

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAllTree(state);
}

export let addInputMessage = () => {
    let text = {
        id: 3,
        message: state.messagesPage.newMessage
    }
    state.messagesPage.messages.push(text);
    rerenderAllTree(state);
    state.messagesPage.newMessage = '';
}
export let updateMessagesText = (newText) => {
    state.messagesPage.newMessage = newText;
    rerenderAllTree(state);
}

export const subscribe = (observer) => {
    rerenderAllTree = observer;
}
export default state;