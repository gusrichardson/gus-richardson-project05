import React, { Component } from 'react';

class Suitcase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            clothingList: []
        }
    }
    changeUserInput(input) {
        this.setState({
            userInput: input
        }, () => console.log(input))

    }


    addClothing(input) {
        let listArray = this.state.clothingList;

        listArray.push(input);

        this.setState({
            clothingList: listArray,
            userInput: ""
        })
    }

    render() {
        return (
            <div className="clothingItems">
                <div className="clothingForm">
                    <input
                        onChange={(e) => this.changeUserInput(e.target.value)}
                        value={this.state.userInput}
                        type="text"
                    />
                    <button onClick={() => this.addClothing(this.state.userInput)}>Update Clothing</button>
                </div>
                <div className="suitcaseList">
                    <ul>
                        {this.state.clothingList.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }


};

export default Suitcase;