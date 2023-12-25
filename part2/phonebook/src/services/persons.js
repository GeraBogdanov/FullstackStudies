import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    console.log("promise fulfilled");
    return response.data;
  });
}

function create(newObject) {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
}

function remove(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
}

function change(person, id) {
  const request = axios.patch(`${baseUrl}/${id}`, {number: person.number,})
  
  return request.then((response) => response.data);
}

export default {
  getAll,
  create,
  remove,
  change,
};
