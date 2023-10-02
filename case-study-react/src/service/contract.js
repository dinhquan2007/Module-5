import axios from "axios";

export const getAllContract=async ()=>{
    return(await axios.get("http://localhost:8100/contract")).data
}
export const addNewContract=async (obj)=>{
    return(await axios.post("http://localhost:8100/contract",obj))
}