import axios from "axios";
import { useEffect, useState } from "react";

const useInventory = id =>{
    const [ inventory , setInventory] = useState([]);
    
    // useEffect(()=>{
    //     const getInventoryById = () =>{
    //     //    const res = await fetch('laptops.json', {
    //     //     headers : { 
    //     //         'Content-Type': 'application/json',
    //     //         'Accept': 'application/json'
    //     //        }
    //     //    })
    //     //    const data = await res.json();
    //         fetch('laptops.json', {
    //             method: "GET",
    //             headers : { 
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //                }
    //         })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //     }

    //     getInventoryById()
    // }, [id]);
    
    const data = [
        {
            name: "15.6 inch i3 laptop computer intel i7 i5 i3 Win 10 laptop cpu i3-5005u",
            "img": "https://i.ibb.co/RTW7g3P/H0b1d279b95a947128f2822c73e25804fh.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing.",
            price: 299.00,
            quantity: 5,
            supplier: "Miya Chen"
        },
        {
            name: "RN-NB142F-1 Laptop Pro quad core 32GB/16GB RAM 32GB ROM ips OLED Game Notebook PC",
            "img": "https://i.ibb.co/FJ5BFbp/H2f216688f8da430fba5f5e9bffb44b7b-B.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 185.00,
            quantity: 5,
            supplier: "abdullah"
        },
        {
            name: "Brand new laptop lowest price for business developed in china laptop computer ",
            "img": "https://i.ibb.co/mbRnY2K/H6b2cbe8aff6548ed993ce7f448ce9bcaw.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 232.00 ,
            quantity: 5,
            supplier: "muhammad ali"
        },
        {
            name: "ROG Zephyrus S Ultra Slim Gaming Laptop, 15.6\" 144Hz IPS-Type Full HD, GeForce RTX 2080",
            "img": "https://i.ibb.co/frrsyRx/H9ba0317e233d42769f1010d35af532ffv.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 400.00,
            quantity: 5,
            supplier: "ayyub iqbal"
        },
        {
            name: "Thin Laptop 14\" Laptop Portable Notebook With Cheap Price in Stock for School CPU N3350",
            "img": "https://i.ibb.co/BTyTsJN/H24e6da5e7f714440945f5052d4dfc609-L.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 212.34 ,
            quantity: 5,
            supplier: "ibrahim lodi"
        },
        {
            name: "14 inch New laptop computer notebook in stock",
            "img": "https://i.ibb.co/1MLKSJF/H0431f8b3d3334789aee4230279ed5499-J.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 205.00,
            quantity: 5,
            supplier: "shahria sayad"
        },
        {
            name: "15.6 inch RAM 8GB win 10 computadora portatil in stock for school",
            "img": "https://i.ibb.co/Ks9rY73/H6282e2fe463e4a84944242ba3f15c547-O.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 185.00 ,
            quantity: 4,
            supplier: "khairul islam"
        },
        {
            name: "Top Grade Second-hand Laptops ",
            "img": "https://i.ibb.co/X3Q1ZM5/Hef864249d55b42b38c8c44dc903407183.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 75.00 ,
            quantity: 5,
            supplier: "Ebrahim"
        },
        {
            name: "Super thin laptops Pro 14 R7 5800H/16G/512G laptop notebook",
            "img": "https://i.ibb.co/WtkBh27/HTB1v4-XLa-KT2g-K0j-SZFvq6xn-FXXa-C.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 878.00,
            quantity: 5,
            supplier: "abdullah galib"
        },
        {
            name: "15.6 Inches Computer Win10 Win7 SSD Online Laptops For Students",
            "img": "https://i.ibb.co/hf9cSR5/U7535ac0e68f543ac91c16c0090c226a1n.jpg",
            "description": "The powerful Windows 10 OS make it easy to check E-mail and manage digital files. Equipped with a 15.6 inch FHD display, powered by Intel i3-5005U processor, Designed with HDMI output, allows you to connect it to monitors, TV or projectors, perfect for creating your personal home theater. Dual band 2.4GHz / 5.0GHz WiFi supported, ensures you high-speed surfing",
            price: 278.00 ,
            quantity: 5,
            supplier: "ali akash"
        }
    ];
    useEffect(()=>{

        const getInventoryById = (id) =>{
        const inventories = data;
        const inv = inventories.find(i => i.name === id);
        setInventory(inv);
        return;
        }
        getInventoryById(id)
    }, [id])
    return [inventory]
};

export default useInventory;