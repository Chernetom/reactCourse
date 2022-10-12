import React from "react";
import s from './new_post.module.css';

const NewPost = () => {
    return (
        <div className={s.new_post}>
            <input className={s.input} placeholder="New post" type="text"/>
            <button className={s.button}>Submit</button>
        </div>
    );
}

export default NewPost;