const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
    posts: [
        {descr: "Today i'm going to Defense of the Ancients", like: "15"},
        {descr: "Hi i'm here", like: "21"}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                descr: state.newPostText,
                like: "0"
            };
            return  {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText:action.newText
            };

        default:
            return state;
    }
}

export let addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
};
export let updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text}
};

export default profileReducer;