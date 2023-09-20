import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Facility from "./components/facility/Facility";
import ListCustomer from "./components/customer/ListCustomer";
import AddNewForm from "./components/customer/AddNewForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <Facility/>
            <AddNewForm/>
            <ListCustomer/>
            <Footer/>
        </div>
    );
}

export default App;
