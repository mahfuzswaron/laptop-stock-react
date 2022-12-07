import { useEffect, useState } from "react";

const UseInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const getInventories = () => {
            fetch('https://laptop-stock-server.onrender.com/laptops')
                .then(res => res.json())
                .then(data => {
                    setInventories(data)
                })

        }
        getInventories();
    }, [inventories])

    return [inventories];
}

export default UseInventories;