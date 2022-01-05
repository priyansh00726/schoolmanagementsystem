import axios from "axios";

const APP_URL = "http://localhost:8080/api/v1/teachers";

export const getAllTeachers = async () => {
  const data = await axios.get(APP_URL);
  const res = data.data;
  return res;
};

export const postNewTeacher = teacher => {
  return axios.post(APP_URL, teacher);
};

const getTeacherById = id => {
  return axios.get(APP_URL + "/" + id);
};

export const editTeacherDetails = id => {
  let teacher = getTeacherById(id);
  return axios.put(APP_URL + "/" + id, teacher);
};

export const deleteTeacher = id => {
  return axios.delete(APP_URL + "/" + id);
};
