import React, { Component } from 'react';

class PackingList extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <textarea placeholder="text goes here"></textarea>
                <button>Clothing Button</button>
            </form>
        )
    }
};

export default PackingList;