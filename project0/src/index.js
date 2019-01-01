import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail
                    name={faker
                    .name
                    .lastName()}
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    name={faker
                    .name
                    .lastName()}
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name={faker
                    .name
                    .lastName()}
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.getElementById('root'));