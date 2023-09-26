import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListCustomer from "./components/customer/ListCustomer";
import AddNewForm from "./components/customer/AddNewForm";
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FormEdit from "./components/customer/FormEdit";
import Facility from "./components/facility/Facility";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/customer/create" element={<AddNewForm/>}/>
                <Route path="/customer/list" element={<ListCustomer/>}/>
                <Route path="/customer/edit/:id" element={<FormEdit/>}/>
                <Route path="/facility/list" element={<Facility/>}/>
            </Routes>
            <Footer/>
            <ToastContainer autoClose={2000}/>
        </div>
    );
}

export default App;
