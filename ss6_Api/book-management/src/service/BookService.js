import {useState} from "react";

const [book, setBook] = useState([]);
const [form, setForm] = useState({});
const [indexSelected, setIndexSelected] = useState(-1);
const handleChange = (events) => {
    setForm(events);
}
const handleValidate=(values)=>{
    const errors={};

}
const handleSelect = (book,indexs) => {
    setBook(book);
    setIndexSelected(indexs)
}
const x = () => {

}