import axios from "axios";

export const getAll=async ()=>{
   return (await axios.get("http://localhost:8080/content")).data}
export const addTodo=async (data)=>{
  try {
      return await axios.post("http://localhost:8080/content", data);
  } catch (e){
     alert("thêm mới thất bại")
  }
}