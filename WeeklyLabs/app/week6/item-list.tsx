
"use client";

import { useState } from "react";
import Item from "../week5/item";

interface ItemType {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

interface ItemListProps {
  items: ItemType[];
}

export default function ItemList({ items = [] }: ItemListProps) {
  const [sortBy, setSortBy] = useState("name");

  
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, ItemType[]>);

  
  const sortedCategories = Object.keys(groupedItems).sort().map(category => ({
    category,
    items: groupedItems[category].sort((a, b) => a.name.localeCompare(b.name))
  }));

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="mt-8">
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-white font-semibold">Sort by:</span>
        
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500" : "bg-orange-800"} text-white`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500" : "bg-orange-800"} text-white`}
        >
          Category
        </button>

        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded ${sortBy === "grouped" ? "bg-orange-500" : "bg-orange-800"} text-white`}
        >
          Grouped Category
        </button>
      </div>


      <ul className="space-y-4">
        {sortBy === "grouped" ? (
          sortedCategories.map((group) => (
            <li key={group.category} className="mb-8">
              <h2 className="text-xl font-bold text-white capitalize mb-2 border-b border-gray-600">
                {group.category}
              </h2>
              <ul className="pl-4">
                {group.items.map((item) => (
                  <Item key={item.id} {...item} />
                ))}
              </ul>
            </li>
          ))
        ) : (
          sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))
        )}
      </ul>
    </div>
  );
}
  