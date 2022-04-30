import { useEffect, useState } from "react";

const UseInventories = () =>{
    const [inventories, setInventories] = useState();
    
    useEffect( ()=>{
        const getInventories = () =>{
            fetch('laptops.json').then(res => res.json()).then(data =>{
                setInventories(data)
            })

        }
        getInventories();
    }, [inventories])

    return [inventories
    
    ];
}

export default UseInventories;