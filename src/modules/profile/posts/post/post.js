import s from './post.module.css';

const Post = (props) => {
    return(
            <div className={s.item}>

                <img className={s.img} src={require('../../../../img/cickada.jpg')} alt="#"/>
                <div className={s.descr}>{props.descr}</div>
                <div className={s.like}> <i className="fa-regular fa-heart"></i> {props.like}</div>
            </div>
    );
}

export default Post;