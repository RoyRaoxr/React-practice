import React from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting kk="kitty" aa="AA"/>
            </div>
        );
    }
}

function Greeting(props) {
    return (
        <span>
            <h2>Happy new year! <br />{props.kk}, {props.aa}</h2>
        </span>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

