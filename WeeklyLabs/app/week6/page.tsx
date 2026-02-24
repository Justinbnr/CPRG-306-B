"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

interface Item {
    id: string;
    name: string;
    quantity: number;
    category: string;
}

export default function week6Page() {
    const [items, setItems] = useState<Item[]>(itemsData);
  const handleAddItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
    return ( 
        <main className="bg-slate-950 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-white bg-gray-900 p-4">
                Updating Shopping List - Week 6
            </h1>
           <div className="max-w-md">
      
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        </div>
        </main> 
    );
}