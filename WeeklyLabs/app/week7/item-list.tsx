"use client";

import { useState } from "react";
import Item from "../week5/item";
import React from "react";

interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

interface ItemListProps {
  items: Item[];
  onItemSelect: (name: string) => void;
}

export default function ItemList({ items, onItemSelect }: ItemListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer p-3 rounded-md hover:bg-slate-800"
          onClick={() => onItemSelect(item.name)}
        >
          <div className="flex justify-between">
            <span>{item.name}</span>
            <span className="text-sm text-slate-400">{item.quantity}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
