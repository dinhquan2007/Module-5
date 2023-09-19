import logo from './logo.svg';
import './App.css';
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["lau nhà"],
            item: ""
        }
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item !== "") {
            this.setState({
                list: [...this.state.list, this.state.item],
                item: ""
            })
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Todo list</h1>
                <input type="text" id="event" value={this.state.item} onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((e, index) => (
                            <li key={index}>{e}</li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
