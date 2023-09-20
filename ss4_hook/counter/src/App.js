import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const useIncrease=(step)=> {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(prev => prev + step)
    }
    return [counter, increase]
}
function App() {

    const [count1, setCount1] = useIncrease(1);
    const [count2, setCount2] = useIncrease(2);

    return (
        <div className="App">
            <h1>{count1}</h1>
            <button onClick={setCount1}>increase one</button>
            <h1>{count2}</h1>
            <button onClick={setCount2}>increase two</button>
        </div>
    );
}



export default App;
