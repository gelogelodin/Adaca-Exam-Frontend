import axios from "axios";

const API_URL = "http://localhost:3001";

export const getTasks = async () => {
  const res = await axios.get(`${API_URL}/tasks`);
  return res.data;
};

export const addTask = async (title: string) => {
  const res = await axios.post(`${API_URL}/tasks`, { title });
  return res.data;
};

export const updateTask = async (id: string, updated: any) => {
  const res = await axios.put(`${API_URL}/tasks/${id}`, updated);
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await axios.delete(`${API_URL}/tasks/${id}`);
  return res.data;
};
