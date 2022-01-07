import axios from "axios";

const APP_URL = "http://localhost:8080/api/v1/students";

export const getAllStudents = async () => {
  const data = await axios.get(APP_URL);
  const res = data.data;
  return res;
};

export const postNewStudent = async student => {
  const data = await axios.post(APP_URL, student);
  const res = data.data;
  return res;
};

export const getStudentById = async id => {
  const data = await axios.get(APP_URL + "/" + String(id));
  const res = data.data;
  return res;
};

export const editStudentDetails = async (id, student) => {
  const data = await axios.put(APP_URL + "/" + String(id), student);
  const res = data.data;
  return res;
};

export const deleteStudent = async id => {
  const data = await axios.delete(APP_URL + "/" + String(id));
  const res = data.data;
  return res;
};
