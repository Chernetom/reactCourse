import React from "react";
import s from './new_post.module.css';

const NewPost = (props) => {
    let newPostInput = React.createRef();

    let sendDataNewPost = () => {
        //props.dispatch(addPostActionCreater());
        props.addPost();
    };
    let newPostChange = () => {
        let text = newPostInput.current.value;
        //props.dispatch(updateNewPostText(text));
        props.updateNewPostText(text);
    }

    return (
        <div className={s.new_post}>
            <input onChange={newPostChange} ref={newPostInput} className={s.input} value={props.postText} placeholder="New post" type="text"/>
            <button onClick={sendDataNewPost} className={s.button}>Submit</button>
        </div>
    );
}

export default NewPost;