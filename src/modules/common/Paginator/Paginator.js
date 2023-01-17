import s from "./Paginator.module.css"
import React, {useState} from "react";

const Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for(let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.wrapper}>
            {leftPortionPageNumber > 1 &&
            <button className={s.button} onClick={() => setPortionNumber(portionNumber - 1)} >Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => <span className={props.currentPage === p ? s.active_page : s.page} onClick={() => {props.onPageChanged(p)}}>{p}</span>)}
            {portionCount > portionNumber &&
                <button className={s.button} onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>
            }
        </div>
    )
}

export default Paginator;