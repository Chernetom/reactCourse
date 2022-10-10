import s from './post.module.css';

const Post = (props) => {
    return(
            <div className={s.item}>
                <div className={s.img}></div>
                {props.descr}
                <div className={s.like}>{props.like}</div>
            </div>
    );
}

export default Post;