import React from 'react';

class searchBar extends React.Component {
    state = {
        term : '',
    };
    handlechange = (event) => {
        this.setState({
            term : event.target.value,
        })
    };
    handlesubmit = (event) => {
        event.preventDefault();
        this.props.onformSubmit(this.state.term)
    }
    render(){
        return (
            <div className="search-bar ui container">
                <form className="ui form" onSubmit={this.handlesubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.handlechange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default searchBar;