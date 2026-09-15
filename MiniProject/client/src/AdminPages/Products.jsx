import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const getProducts = async () => {
        try {
            const result = await axios.get("http://localhost:3000/project/getproducts")
            console.log(result)
            setProducts(result.data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
  

 
    
    const deleteProduct = async(id)=>{
        try{
           const result = await axios.delete(`http://localhost:3000/project/deletepro/${id}`)
           console.log(result)
           alert(result.data.message)
           navigate("/dashboard/getproducts")
           getProducts()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='main-content'>
            <div className="row">
                <h1 className='text-center'>Our Products</h1>
                <div className="col-6 offset-3">
                    {loading ? (<h2>Loading.....</h2>) : (
                        <table className='table table-bordered'>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>

                            {products.map((p) => (
                                <tr key={p._id}>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>
                                        {p.image ? (<img src={p.image} alt="" width={100} height={100} />
                                        ) : ("Image Not Found")}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/editproduct/${p._id}`} className='btn btn-warning'>Edit</Link>
                                        <a href="" className='btn btn-danger' onClick={(e)=>{
                                            e.preventDefault()
                                            deleteProduct(p._id)
                                        }}>Delete</a>
                                    </td>
                                </tr>
                            ))}

                        </table>)}

                    <Link to={"/dashboard/addproduct"}><button className='btn btn-primary'>Add New Product</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Products
