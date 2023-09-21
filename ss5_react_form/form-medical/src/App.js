import './App.css';
import Declaration from "./components/Declaration";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Declaration/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
