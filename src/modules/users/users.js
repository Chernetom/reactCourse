import React from "react";
import UsersPhoto from "../../img/Kolyan.png";
import s from "./users.module.css";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class Users extends React.Component {

    componentDidMount() {
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for(let i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }
        return(
        <div>
            {this.props.isFetching ? <Preloader /> : null}
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? s.active_page : s.page} onClick={() => {this.onPageChanged(p)}}>{p}</span>)}
            </div>
            {
                this.props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UsersPhoto} alt="#" className={s.image}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}

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
}

export default Users;