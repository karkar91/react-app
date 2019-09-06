import  React from 'react';
import  s from './Post.module.css';
const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPp8spgWUsN2jR6oAPUmlkdQEEiKM32ZkbBtCbYhy0_CLOcqWgg" alt=""/>
                    {props.message}
                    <div>
                        <span>Like {props.likeCount}</span>
                    </div>
                </div>
    )
};
export  default  Post;
