import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const deleteData = (deleteObject, id) => {
  return axios.delete(`${baseUrl}/${id}`, { data: deleteObject });
};

const dataPatch = (id, newNumber) => {
  return axios.patch(`${baseUrl}/${id}`, { number: newNumber });
};
export default { getAll, create, deleteData, dataPatch };
