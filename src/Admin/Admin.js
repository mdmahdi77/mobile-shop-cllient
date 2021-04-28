import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    
    const onSubmit = data => {
        const eventData = {
            name: data.fname,
            brand: data.brandName,
            price: data.price,
            quantity: data.quantity,
            img: imageUrl
          }
        console.log(data)
        const uri = `http://localhost:6066/addEvents`
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server side", res))
        .then(data => {
            if(data){
                alert("Your Product is added successfully")
            }
        })
    };
    const handleImageUrl = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '3fdc4394d2aa620592a552e98b379e1c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            setImageUrl(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div>
            <h1>Add To Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="fname" defaultValue="Product Name" {...register("fname")} />
                <br/>
                <input name="brandName" defaultValue="Brand" {...register("brandName")} />
                <br/>
                <input name="price" defaultValue="Price" {...register("price")} />
                <br/>
                <input name="quantity" defaultValue="Quantity" {...register("quantity")} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUrl} />
                <br/>
                <input type="submit" className="submit" />
            </form>
        </div>
    );
};

export default Admin;