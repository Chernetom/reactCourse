let store = {
    _rerenderAllTree:{},
    _state: {
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
                {id:3, name:"Kolyan", img:'https://www.meme-arsenal.com/memes/7cd42c02a6bc9ff52868a97b45edd550.jpg'},
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
    },
    getState() {
        return this._state;
    },
    addPost() {
        let post = {
            descr: this._state.profilePage.newPostText,
            like: "0"
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this._rerenderAllTree(this._state);
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderAllTree(this._state);
    },
    addInputMessage() {
        let text = {
            id: 3,
            message: this._state.messagesPage.newMessage
        }
        this._state.messagesPage.messages.push(text);
        this._rerenderAllTree(this._state);
        this._state.messagesPage.newMessage = '';
    },
    updateMessagesText(newText)  {
        this._state.messagesPage.newMessage = newText;
        this._rerenderAllTree(this._state);
    },
    subscribe (observer)  {
        this._rerenderAllTree = observer;
    }
}

export default store;