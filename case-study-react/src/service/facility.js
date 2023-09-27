import axios from "axios";

export const getAllFacility = async () => {
    return (await axios.get("http://localhost:8100/facility")).data
}
export const addFacility = async (data) => {
    return (await axios.post("http://localhost:8100/facility", data))
}