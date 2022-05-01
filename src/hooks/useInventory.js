import axios from "axios";
import { useEffect, useState } from "react";

const useInventory = id =>{
    const [ inventory , setInventory] = useState([]);
    
    useEffect(()=>{

        const getInventoryById = (id) =>{
            
        fetch(`http://localhost:4000/laptops/${id}`)
        .then(res => res.json())
        .then(data => setInventory(data))
        
        }
        getInventoryById(id)
    }, [id])
    return [inventory]
};

export default useInventory;