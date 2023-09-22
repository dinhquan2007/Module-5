import logo from './logo.svg';
import './App.css';
import 'react-router-dom';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm/>}>create</Route>
        <Route path="/list" element={<TodoList/>}>List</Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
