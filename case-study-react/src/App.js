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
import ListContact from "./components/contact/ListContact";
import CreateContract from "./components/contact/CreateContract";
import CreateFacility from "./components/facility/CreateFacility";
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/customer/create" element={<AddNewForm/>}/>
                <Route path="/customer/list" element={<ListCustomer/>}/>
                <Route path="/customer/edit/:id" element={<FormEdit/>}/>
                <Route path="/facility/list" element={<Facility/>}/>
                <Route path="/facility/create" element={<CreateFacility/>}/>
                <Route path="/contract/list" element={<ListContact/>}/>
                <Route path="/contract/create" element={<CreateContract/>}/>

            </Routes>
            <Footer/>
            <ToastContainer autoClose={2000}/>
        </div>
    );
}

export default App;
