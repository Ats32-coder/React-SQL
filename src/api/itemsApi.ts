import axios from "axios";

const API = "http://localhost:4000/api/items";

export const fetchItems = () => axios.get(API);
export const createItem = (name: string) => axios.post(API, { name });
export const updateItem = (id: number, name: string) =>
  axios.put(`${API}/${id}`, { name });
export const deleteItem = (id: number) => axios.delete(`${API}/${id}`);