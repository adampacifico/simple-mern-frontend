import axios from "axios";
const url = "https://simple-crud-backend.herokuapp.com/persons";
// const url = "http://localhost:1000/persons";

export const readPersons = () => axios.get(url);
export const createPerson = (newPerson) => axios.post(url, newPerson);
export const updatePerson = (id, updatedPerson) => axios.patch(`${url}/${id}`, updatedPerson);
export const deletePerson = (id) => axios.delete(`${url}/${id}`);