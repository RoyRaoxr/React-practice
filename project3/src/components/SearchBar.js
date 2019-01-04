import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: 'nmsl'
    };

    onInputChange = event => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();


        //todo callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Vedio Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;