import { useEffect, useState } from "react";
import "./App.css";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import * as api from "./api/itemsApi";

type Item = {
  id: number;
  name: string;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  const load = async () => {
    const res = await api.fetchItems();
    setItems(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async (name: string) => {
    await api.createItem(name);
    await load();
  };

  const handleDelete = async (id: number) => {
    await api.deleteItem(id);
    await load();
  };

  const handleEdit = async (id: number, currentName: string) => {
    const newName = prompt("Sisesta uus nimi:", currentName);

    if (!newName || !newName.trim()) {
      return;
    }

    await api.updateItem(id, newName);
    await load();
  };

  return (
    <div>
      <h1>My Data app</h1>
      <ItemForm onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}