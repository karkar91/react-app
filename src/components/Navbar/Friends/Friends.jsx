import  React from 'react';
import MyFriends from "./MyFriends/MyFriends";

const Friends = (props) => {
    let friends = props.state.friends.map( f=> (<MyFriends id={f.id} name={f.name} img={f.img}/>) )
    return (
        <div >
            {friends}
        </div>
    )
};
export default Friends;