import { useEffect, useState } from "react";

const useInventory = id => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {

        const getInventoryById = (id) => {

            fetch(`https://laptop-stock-server.onrender.com/laptops/${id}`)
                .then(res => res.json())
                .then(data => setInventory(data))

        }
        getInventoryById(id)
    }, [id, inventory])
    return [inventory]
};

export default useInventory;