import * as api from "../api";

// read Persons
export const readPersons = async () => {
  try {
    const { data } = await api.readPersons();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// create Person
export const createPerson = async (person) => {
  try {
    const { data } = await api.createPerson(person);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// update Person
export const updatePerson = async (id, person) => {
  try {
    const { data } = await api.updatePerson(person);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// delete Person
export const deletePerson = async (id) => {
  try {
    await api.deletePerson(id);
  } catch (error) {
    console.log(error);
  }
};
