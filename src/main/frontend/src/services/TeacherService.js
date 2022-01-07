import axios from "axios";

const APP_URL = "http://localhost:8080/api/v1/teachers";

export const getAllTeachers = async () => {
  const data = await axios.get(APP_URL);
  const res = data.data;
  return res;
};

export const postNewTeacher = async teacher => {
  const data = await axios.post(APP_URL, teacher);
  const res = data.data;
  return res;
};

export const getTeacherById = async id => {
  const data = await axios.get(APP_URL + "/" + String(id));
  const res = data.data;
  return res;
};

export const editTeacherDetails = async (id, teacher) => {
  const data = await axios.put(APP_URL + "/" + String(id), teacher);
  const res = data.data;
  return res;
};

export const deleteTeacher = async id => {
  const data = await axios.delete(APP_URL + "/" + String(id));
  const res = data.data;
  return res;
};
