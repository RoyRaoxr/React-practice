import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 897584fda1e68b13df73f7df2319bd8148203181d222e920cc0328bab7d1288e'
            }
        });
    }

    render() {
        return (
            <div
                className="ui container"
                style={{
                marginTop: '10px'
            }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;