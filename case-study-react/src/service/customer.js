import axios from "axios";

export const getAllCustomer= async ()=>{
    return (await axios.get("http://localhost:8100/customer")).data
}
export const createCustomer=async (data)=>{
return (await axios.post("http://localhost:8100/customer",data))
}
export const removeCustomer=async (id)=>{
    return(await axios.delete("http://localhost:8100/customer/"+id))
}
export const getCustomer=async (id)=>{
    return(await axios.get("http://localhost:8100/customer/"+id)).data
}
export const getCustomerForName=async (search,page,limit)=>{
    return(await axios.get(`http://localhost:8100/customer?_page=${page}&_limit=${limit}&name_like=${search}`)).data
}
export const saveCustomer=async (obj)=>{
    return(await axios.put("http://localhost:8100/customer/"+obj.id,obj))
}