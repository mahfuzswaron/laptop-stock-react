import { useEffect, useState } from "react";

const UseInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const getInventories = () => {
            fetch('https://laptop-stock-server.herokuapp.com/laptops')
                .then(res => res.json())
                .then(data => {
                    setInventories(data)
                })

        }
        getInventories();
    }, [])

    return [inventories];
}

export default UseInventories;