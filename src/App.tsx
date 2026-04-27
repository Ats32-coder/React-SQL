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
  // Hoiame siin kõiki itemeid (alguses tühi list)
  const [items, setItems] = useState<Item[]>([]);

  // Funktsioon, mis laeb andmed serverist
  const load = async () => {
    const res = await api.fetchItems(); // küsib itemid API-st
    setItems(res.data); // salvestab need state'i
  };

  // Käivitub automaatselt, kui leht avaneb
  useEffect(() => {
    load(); // laeme andmed
  }, []);

  // Funktsioon uue itemi lisamiseks
  const handleAdd = async (name: string) => {
    await api.createItem(name);
    await load();
  };

  // Funktsioon itemi kustutamiseks
  const handleDelete = async (id: number) => {
    await api.deleteItem(id);
    await load();
  };

  // Funktsioon itemi muutmiseks (edit)
  const handleEdit = async (id: number, currentName: string) => {
    // küsib kasutajalt uue nime
    const newName = prompt("Sisesta uus nimi:", currentName);

    // kui midagi ei sisestata, siis katkestab
    if (!newName || !newName.trim()) {
      return;
    }

    await api.updateItem(id, newName); // uuendab serveris
    await load(); // uuendab listi
  };

  // Mida ekraanil näidatakse
  return (
    <div>
      <h1>My Data app</h1>
      <ItemForm onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}