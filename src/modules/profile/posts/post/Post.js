import s from './Post.module.css';
import UsersPhoto from "../../../../img/Kolyan.png";

const Post = (props) => {
    return(
            <div className={s.item}>

                <img className={s.img} src={props.userImage ? props.userImage : UsersPhoto} alt="#"/>
                <div className={s.descr}>{props.descr}</div>
                <div className={s.like}> <i className="fa-regular fa-heart"></i> {props.like}</div>
            </div>
    );
}

export default Post;