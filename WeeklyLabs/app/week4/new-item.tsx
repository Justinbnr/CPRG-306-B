"use client";
import { useState } from 'react';
export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    function handlesubmit(e: React.FormEvent) {
        e.preventDefault();

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
    }

    return (
        <form onSubmit={handlesubmit}>
            <div>  
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor='quantity'>Quantity</label>
                <input
                    id='quantity'
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min='1'
                    required
                />
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <select
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
            <button type='submit'>Add Item</button>
        </form>
    );
}

   