import React from "react";
import s from "./users.module.css"
import axios from "axios";
import UsersPhoto from "../../img/Kolyan.png";

const Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

/*    if(props.users.length === 0){
        props.setUsers([
            {id: '1', followed: true, img: 'https://sun9-81.userapi.com/c5660/u110523123/-6/z_5779c98b.jpg', fullName: 'Anton', description: 'Hi! it is me', location: {country: "Russia", city: "Moscow"}},
            {id: '2', followed: tr  ue, img: 'https://sun7-8.userapi.com/impf/c628728/v628728152/37830/m-CWsgx2cy4.jpg?size=610x915&quality=96&sign=053b74e7bf58fde62a3327baa1032bbf&type=album',fullName: 'Vlad', description: 'Hi! I am Vlad', location: {country: "Russia", city: "Moscow"}},
            {id: '3', followed: false, img: 'https://www.meme-arsenal.com/memes/7cd42c02a6bc9ff52868a97b45edd550.jpg', fullName: 'Kolyan', description: 'I am here', location: {country: "Russia", city: "Moscow"}},
            {id: '4', followed: true, img: 'https://i.etsystatic.com/isla/8433c7/36279887/isla_fullxfull.36279887_akc94h7m.jpg?version=0', fullName: 'Alexandro', description: 'Les go', location: {country: "Russia", city: "Moscow"}},
        ]
        );
    }*/

    return (<div>
        <button onClick={getUsers}>Upload</button>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UsersPhoto} alt="#" className={s.image}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
    </div>)
}


export default Users;