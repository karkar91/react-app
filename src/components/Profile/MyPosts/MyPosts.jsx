import  React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    let postData = [
        {id:1,message:'Hi how are you?',likeCount:15},
        {id:2,message:"It's my first post",likeCount:22}
    ];
    let postItem = postData.map(postElem => (<Post message={postElem.message} likeCount={postElem.likeCount}/>));
    return (
       <div>
           <h3> My Posts </h3>
           <div className={s.addPost}>
                 <div>
               <textarea name="" id=""></textarea>
               </div>
               <div>
               <button>Add Post</button>
               </div>
           </div>
           <div className={s.posts}>
               {postItem}
           </div>
       </div>
    )
};
export  default  MyPosts;
