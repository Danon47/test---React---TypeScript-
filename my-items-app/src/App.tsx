import React, { useState, useEffect } from "react";
import { ItemCard } from "./components/ItemCard";

const LOCAL_STORAGE_KEY = "items-list";

export const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!newItem.trim()) return;
    setItems([...items, newItem.trim()]);
    setNewItem("");
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Список вещей</h1>

      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Добавь вещь..."
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <ItemCard key={index} text={item} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
};
