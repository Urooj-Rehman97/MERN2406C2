import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [quantity, setQuantity]= useState("")
    const [oldimage, setOldImage]= useState("")
    const [image, setImage]= useState(null)

    useEffect(()=>{
        const getproduct = async()=>{
            try {
                const res = await axios.get(`http://localhost:3000/project/getproduct/${id}`)
                const product = res.data.data
                setName(product.name)
                setPrice(product.price)
                setQuantity(product.quantity)
                setOldImage(product.image)
                // console.log(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getproduct() 
        
    },[id])
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("name",name)
        formData.append("price",price)
        formData.append("quantity",quantity)
        if (image) {
            formData.append("image", image);
        }
        try {
            const result = await axios.put(`http://localhost:3000/project/updatepro/${id}`, formData, 
               { 
                headers: {
                    "Content-Type" :"multipart/form-data"
                }
            });
            console.log(result.data)
            alert(result.data.message)
            navigate("/dashboard/getproducts")
        } catch (error) {
            console.log(result.data)
        }
    }
  return (
    <div>
      <div className="form-container main-content">
	<p className="title">Update Product</p>
	<form className="form" onSubmit={handleSubmit}>
		<div className="input-group">
			<label for="username">Product Name</label>
			<input type="text" name="name" id="username" placeholder="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Product Price</label>
			<input type="text" name="price" id="username" placeholder="" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Product Quantity</label>
			<input type="text" name="quantity" id="username" placeholder="" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Old Image</label>
			
                <img src={oldimage} alt="" width={100} height={100} />
            
		</div>
        <div className="input-group">
			<label for="username">Product Image</label>
			<input type="file" name="image" id="username" onChange={(e)=>{setImage(e.target.files[0])}}/>
		</div>
		
		<button className="sign" type='submit'>Update Product</button>
	</form>
	

</div>
    </div>
  )
}

export default EditProduct
