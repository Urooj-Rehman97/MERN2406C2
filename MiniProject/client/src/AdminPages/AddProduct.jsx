import React, { useState } from 'react'
import './AddProduct'
import axios from 'axios'
import { useNavigate } from 'react-router'

const AddProduct = () => {
    const navigate = useNavigate()
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [quantity, setQuantity]= useState("")
    const [image, setImage]= useState(null)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("name",name)
        formData.append("price",price)
        formData.append("quantity",quantity)
        formData.append("image",image)
        try {
            const result = await axios.post("http://localhost:3000/project/createproduct", formData, 
               { 
                headers: {
                    "Content-Type" :"multipart/ form-data"
                }
            });
            console.log(result.data)
            alert((await result).data.message)
            navigate("/dashboard/getproducts")
        } catch (error) {
            console.log(result.data)
        }
    }
  return (
 
<div className="form-container main-content">
	<p className="title">Add Product</p>
	<form className="form" onSubmit={handleSubmit}>
		<div className="input-group">
			<label for="username">Product Name</label>
			<input type="text" name="name" id="username" placeholder="" onChange={(e)=>{setName(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Product Price</label>
			<input type="text" name="price" id="username" placeholder="" onChange={(e)=>{setPrice(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Product Quantity</label>
			<input type="text" name="quantity" id="username" placeholder="" onChange={(e)=>{setQuantity(e.target.value)}}/>
		</div>
        <div className="input-group">
			<label for="username">Product Iamge</label>
			<input type="file" name="image" id="username"  onChange={(e)=>{setImage(e.target.files[0])}}/>
		</div>
		
		<button className="sign" type='submit'>Add New Product</button>
	</form>
	

</div>
  )
}

export default AddProduct
