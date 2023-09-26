import axios from "axios";
 export const getAllType= async ()=>{
    return(await axios.get("http://localhost:8100/type")).data
}

