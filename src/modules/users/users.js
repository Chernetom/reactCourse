import React from "react";
import UsersPhoto from "../../img/Kolyan.png";
import s from "./users.module.css";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
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
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : UsersPhoto} alt="#" className={s.image}/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={this.props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button disabled={this.props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {this.props.follow(u.id)}}>Follow</button>
                            }

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