import axios from "axios";

export const getAllTypeService=async ()=>{
    return (await axios.get("http://localhost:8100/typeService")).data
}