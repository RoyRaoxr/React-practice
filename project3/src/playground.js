import React from 'react';
import axios from 'axios';

export default class Play extends React.Component {

    state = {
        user: ''
    };

    getUser = async() => {
        const res = await axios.get('http://127.0.0.1:9999/yizhou');
        this.setState({user: res.data});
        console.log(res);
    };

    getDate = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then(json => console.log(json.data));
    }

    render() {
        return (
            <div>
                <button onMouseDown={this.getDate}>Click</button>
                <h1>{this.state.user}</h1>
            </div>
        );
    }
}
