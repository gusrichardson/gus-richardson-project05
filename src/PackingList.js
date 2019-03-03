import React, { Component } from 'react';
import firebase from './firebase';
// import Suitcase from './Suitcase';

class PackingList extends Component {

    state = {
        clothingArray: [],
        clothing: ""
    }

    submitClothing = (event) => {
        event.preventDefault();
        console.log(this.state.clothing)
        const dbRef = firebase.database().ref()
        dbRef.push(this.state.clothing)
        this.setState({
            clothingArray: [],
            clothing: ''
        })
    }
    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', response => {
            console.log(response.val());
            const newState = [];
            const data = response.val();
            console.log(data, 'this is the data object')

            for (let key in data) {

                console.log(data[key], "this is the data key")

                newState.push({
                    key: data[key]
                })
                console.log(newState, "this is the new state array of objects")
            }
            this.setState({
                clothing: newState
            })
            console.log(this.state.clothing, "this is the state of clothing")



        })
    }

    render() {

        return (

            <div>
                <ul>
                    {
                        this.state.clothing.map((book, i) => {
                            return (
                                <li key={book.key} id={book.key}>
                                    <p>{book.key}</p>
                                    <button onClick={() => this.removeBook(book.key)}>Remove this book</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <form onSubmit={this.props.addClothing}>
                    <textarea
                        placeholder="Choose what clothing to pack"
                        name="clothing"
                        value={this.state.clothing}
                        onChange={this.handleChange}
                    />
                    <button
                        id="clothingButton"
                        onClick={this.submitClothing}
                    >Submit Clothing Item </button>
                </form> */}
            </div>
        )
    }
};

export default PackingList;