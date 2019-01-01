import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            errMessage: ''
        }

    }

    componentDidMount() {
        window
            .navigator
            .geolocation
            .getCurrentPosition(
                position => this.setState({ latitude: position.coords.latitude }),
                err => this.setState({ errMessage: err }));
    }

    componentDidUpdate() {
        console.log("update");
    }
    
    render() {
        if (this.state.errMessage && !this.state.latitude) {
            return <div>Error :{this.state.errMessage}</div>;
        }
        if (!this.state.errMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude} />
        }
        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />, document.getElementById('root'));