import React from "react";
import s from './newPost.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength80 = maxLength(80);

const NewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input} placeholder={"New post"} name={"newPost"} component={Textarea}
                       validate={[required, maxLength80]}></Field>
                <button className={s.button}>Submit</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form:'addNewPost'})(NewPostForm);

const NewPost = (props) => {

    let onAddPost = (values) => {
        //props.dispatch(addPostActionCreater());
        props.addPost(values.newPost);
    };

    return (
        <div className={s.new_post}>
{/*            <input onChange={newPostChange} ref={newPostInput} className={s.input} value={props.postText} placeholder="New post" type="text"/>
            <button onClick={sendDataNewPost} className={s.button}>Submit</button>*/}
            <NewPostReduxForm onSubmit={onAddPost} />
        </div>
    );
}

export default NewPost;