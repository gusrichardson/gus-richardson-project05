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

    deleteItem = () => {
        let newListArray = this.state.clothingList;
        newListArray.pop();
        this.setState({
            clothingList: newListArray,
        })
    }

    render() {
        return (
            <div className="clothingItems">
                <div className="clothingForm">
                    <label htmlFor="clothingInput">Add clothing here</label>
                    <input
                        onChange={(e) => this.changeUserInput(e.target.value)}
                        value={this.state.userInput}
                        type="text"
                        id="clothingInput"
                        placeholder="insert clothing"
                    />
                    <button onClick={() => this.addClothing(this.state.userInput)}>Add to List</button>
                </div>
                <div className="suitcaseList">
                    <h2>Clothing to Bring</h2>
                    <ul>
                        {this.state.clothingList.map((item) => {
                            return <li className="clothesList">
                                {item}
                            </li>
                        })}
                    </ul>
                    <button id="listDelete" onClick={() => this.deleteItem()}>Delete last</button>
                </div>
            </div>
        )
    }


};

export default Suitcase;