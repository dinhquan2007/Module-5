import axios from "axios";

export const getAllCustomer= async ()=>{
    return (await axios.get("http://localhost:8100/customer")).data
}
export const createCustomer=async (customer)=>{
    console.log(customer)
return (await axios.post("http://localhost:8100/customer",customer))
}
export const removeCustomer=async (id)=>{
    return(await axios.delete("http://localhost:8100/customer/"+id))
}
export const getCustomer=async (id)=>{
    return(await axios.get("http://localhost:8100/customer/"+id)).data.content
}
export const getCustomerForName=async (searchName,page,limit)=>{
    const res= (await axios.get(`http://localhost:8100/customer?page=${page}&limit=${limit}&searchName=${searchName}`)).data.content
    console.log(res);
    return res;
}
export const saveCustomer=async (obj)=>{
    return(await axios.put("http://localhost:8100/customer/"+obj.id,obj))
}