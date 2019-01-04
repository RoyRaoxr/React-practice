import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

    state = {
        user: ''
    };

    getUser = () => {
        axios
            .get('http://127.0.0.1:9999/yizhou')
            .then(response => {
                this.setState({user: response.data});
            });
    };

    render() {
        return (
            <div>
                <span onMouseDown={this.getUser}>Click</span>
                <h1>{this.state.user}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));
