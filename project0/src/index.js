import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                name={faker
                .name
                .lastName()}
                avatar={faker
                .image
                .avatar()}/>
            <CommentDetail
                name={faker
                .name
                .lastName()}
                avatar={faker
                .image
                .avatar()}/>
            <CommentDetail
                name={faker
                .name
                .lastName()}
                avatar={faker
                .image
                .avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.getElementById('root'));