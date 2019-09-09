import  React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = (props) => {

    let addNewPost = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let postItem = props.posts.map(postElem => (<Post message={postElem.message} likeCount={postElem.likeCount}/>));
    let onPostChange = () => {
        let text = addNewPost.current.value;
        props.updateNewPost(text);
    };

    return (
       <div>
           <h3> My Posts </h3>
           <div className={s.addPost}>
                 <div>
               <textarea onChange={onPostChange} ref={ addNewPost } value={props.newPostText}/>
               </div>
               <div>
               <button onClick={ addPost}>Add Post</button>
               </div>
           </div>
           <div className={s.posts}>
               {postItem}
           </div>
       </div>
    )
};
export  default  MyPosts;
