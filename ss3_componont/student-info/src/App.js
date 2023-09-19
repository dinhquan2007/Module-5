import './App.css';
import StudentInfoComponont from "./compononts/StudentInfoComponont";

const studentList = [
    {
        id: 1,
        name: "quan",
        age: 20,
        address: "da nang"
    },
    {
        id: 2,
        name: "quan",
        age: 20,
        address: "da nang"
    },
    {
        id: 3,
        name: "quan",
        age: 20,
        address: "da nang"
    },
    {
        id: 4,
        name: "quan",
        age: 20,
        address: "da nang"
    }
]

function App() {
    return (
        <div className="App">
            <StudentInfoComponont students={studentList}/>
        </div>
    );
}

export default App;
