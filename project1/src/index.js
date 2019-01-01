import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        latitude: '',
        errMessage: ''
    }

    componentDidMount() {
        window
            .navigator
            .geolocation
            .getCurrentPosition(position => this.setState({latitude: position.coords.latitude}), err => this.setState({errMessage: err}));
    }

    componentDidUpdate() {
        console.log("update");
    }

    render() {
        if (this.state.errMessage && !this.state.latitude) {
            return <div>Error :{this.state.errMessage}</div>;
        }
        if (!this.state.errMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude}/>
        }
        return <Spinner message="Please accept loaction request"/>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));