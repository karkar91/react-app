import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscriber} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </BrowserRouter>, document.getElementById('root'));
}



rerenderEntireTree(state);
subscriber(rerenderEntireTree);

serviceWorker.unregister();

