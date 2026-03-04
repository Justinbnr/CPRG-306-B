"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export default function Week7Page() {
  const [items, setItems] = useState<Item[]>(itemsData);

  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const handleItemSelect = (name: string) => {
    const cleanName = name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanName);
  };

  const handleAddItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      <header className="bg-gray-900 border-b border-slate-800 py-8 px-4 shadow-2xl mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Shopping <span className="text-blue-500">&</span> Recipes
        </h1>
        <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-semibold">
          Week 7: Component Interaction
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <aside className="lg:col-span-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg sticky top-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Add Item</h2>
            <NewItem onAddItem={handleAddItem} />
          </div>
        </aside>

        <section className="lg:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg h-full">
            <h2 className="text-xl font-bold text-white mb-6">Your List</h2>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </section>

        <section className="lg:col-span-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg min-h-96">
            <h2 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">🍳</span> Meal Ideas
            </h2>
            
            {selectedItemName ? (
              <MealIdeas ingredient={selectedItemName} />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-500 border-2 border-dashed border-slate-800 rounded-xl text-center px-4">
                <p className="text-sm italic">Click an item in your list to see recipe inspiration!</p>
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}