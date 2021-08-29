import React, {useState, useEffect} from 'react';
import './App.css';



function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v1/banners');
        const items = await data.json();
        console.log(items.data)
        setItems(items.data);
    }
  return (
    <div>
     {items.map(item =>(
         <h1>{item.devName}</h1>
     ))}
    </div>
  );
}

export default Shop;
