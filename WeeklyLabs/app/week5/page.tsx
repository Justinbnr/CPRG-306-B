import ItemList from "../week5/item-list";
import itemsData from "./items.json";

export default function week5Page() {
    return ( 
        <main className="bg-slate-950 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-white bg-gray-900 p-4">
                Shopping List - Week 5
            </h1>
            
            <ItemList items={itemsData}/>
        </main> 
    );
}