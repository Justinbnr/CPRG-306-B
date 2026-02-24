"use client";
import { useState } from 'react';
export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');
    const isInvalid = !name || name.trim().length < 2;
    const [nameTouched, setNameTouched] = useState(false);
    function handlesubmit(e: React.FormEvent) {
        e.preventDefault();

        if(!name || name.trim().length <2){
            alert ('Please enter a valid name with at least 2 characters.');
            return;
        }

        const newItem = {
            name,
            quantity,
            category,
        };

        console.log('New Item Added: ', newItem);
        alert(`Item Details: \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');
        setNameTouched(false);
    }
    

    return (
        <form onSubmit={handlesubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
  <h2 className="text-xl font-bold mb-6 text-indigo-700 text-center">New Shopping Item</h2>
            <div className='flex justify-center'>  
                <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                <input
                className="border border-black-300 rounded-md px-2 py-1"
                    id='name'
                    type='text'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                    onBlur ={() => setNameTouched(true)}
            
                />                
                    {nameTouched && isInvalid && (
                    <p className="text-red-500 text-sm font-bold mt-1">
                        {name.length === 0 ? "Name is required" : "Invalid input: need two characters"}
                    </p>
                )}
                    
            </div>

            <div className='flex justify-center'>
                <label htmlFor='quantity' className="block text-sm font-medium">Quantity</label>
                <input 
                className="border border-black-300 rounded-md px-2 py-1"
                    id='quantity'
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min='1'
                    required
                />
            </div>

            <div className='flex justify-center'>
            
                <label htmlFor='category' className="block text-sm font-medium text-gray-700">Category</label>
                <select
                className="border border-black-300 rounded-md px-2 py-1"
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value='produce'>Produce</option>
                    <option value='meat'>Meat</option>
                    <option value='dairy'>Dairy</option>
                </select>
            </div>

            <div className='flex justify-center'>

            <button 
            type='submit'
            disabled = {isInvalid} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                Add Item
            </button>
            </div>
        </form>
    );

}