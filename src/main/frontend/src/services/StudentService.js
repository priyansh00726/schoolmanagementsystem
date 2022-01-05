import axios from "axios";

const APP_URL = "http://localhost:8080/api/v1/students";

export const getAllStudents = async () => {
  const data = await axios.get(APP_URL);
  const res = data.data;
  return res;
};

export const postNewStudent = student => {
  return axios.post(APP_URL, student);
};

const getStudentById = id => {
  return axios.get(APP_URL + "/" + id);
};

export const editStudentDetails = id => {
  let student = getStudentById(id);
  return axios.put(APP_URL + "/" + id, student);
};

export const deleteStudent = id => {
  return axios.delete(APP_URL + "/" + id);
};
