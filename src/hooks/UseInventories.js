import { useEffect, useState } from "react"

const UseInventories = () =>{
    const [inventories, setInventories] = useState();
    useEffect( ()=>{
        const getInventories = () =>{
            fetch('laptops.json').then(res => res.json()).then(data =>{
                console.log(data, 'from useinv')
                setInventories(data)
            })

        }
        getInventories();
    }, [inventories])

    return [inventories];
}

export default UseInventories;