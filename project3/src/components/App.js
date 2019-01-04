import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}

export default App;