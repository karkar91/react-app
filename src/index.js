import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id:1,message:'Hi how are you?',likeCount:15},
    {id:2,message:"It's my first post",likeCount:22}
];

let dialogs = [
    {id:1,name:'Dimych'},
    {id:2,name:'Vasya'},
    {id:3,name:'Bldo'},
];

let messages = [
    {id:1, message:'Hi!!!!'},
    {id:2, message:'How are you?'},
    {id:3, message:'yahoooo!!!'},
];

ReactDOM.render(<App posts={postData} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
