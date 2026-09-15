import fs from 'fs'
import product from '../Models/product.mjs';
const getImageUrl = (req,filename)=>{
    return `${req.protocol}://${req.get("host")}/uploads/${filename}`
}
// addnewProduct
//http://localhost:3000/project/createproduct
export const create = async(req,res)=>{
    try {
        const {name,price,quantity} = req.body;
        if(!name || !price){
           if(req.file){
            await fs.unlink(path.join(__dirname,"../uploads", req.file.filename))
           } 
           return res.status(400).json({success: false, message: "Name and price are required"})
        }
        const imageUrl = req.file? getImageUrl(req, req.file.filename) : null
        const newProduct = await product.create({
            name: name,
            price: price,
            quantity: quantity,
            image: imageUrl

        })
        return res.status(200).json({success: true, message: "Product Added Successfully...", newProduct})

        
    } catch (error) {
        res.send({Error: error.message})
    }
}

// getallproducts
//http://localhost:3000/project/getproducts

export const GetAllProducts = async(req,res)=>{
    try {
        const products =  await product.find();
        if(products){
            return res.status(200).json({success: true, data:products})
        }else{
            return res.status(404).json({message: "No Data Found"})
        }
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

// getproductsbyId
//http://localhost:3000/project/getproduct/:id

export const GetProducts = async(req,res)=>{
    try {
        const {id} = req.params
        const productdata =  await product.findById(id);
        if(product){
            return res.status(200).json({success: true, data:productdata})
        }else{
            return res.status(404).json({message: "No Data Found"})
        }
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

//edit Products
//http://localhost:3000/project/updatepro/:id
export const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const {name, price, quantity} = req.body

        const existingProduct = await product.findById(id)
        if(!existingProduct){
            return res.status(404).json({success: false, message: "Product Not Found"});
        }

        let image = existingProduct.image;
        if(req.file){
            image =  getImageUrl(req, req.file.filename)
        //delete old image
        if(existingProduct.image){
            const oldImageName= existingProduct.image.split("/").pop();
            const oldImagePath = `./uploads/${oldImageName}`

            if(fs.existsSync(oldImagePath)){
                fs.unlinkSync(oldImagePath)
            }
        }
    }

    const updateProduct = await product.findByIdAndUpdate(id,
        {
            name: name,
            price: price,
            quantity: quantity,
            image: image 
        },
        {new: true}
    )
    return res.status(200).json({success: true, message: "Product Updated Successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

// deleteProduct
// http://localhost:3000/project/deletepro/:id
export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const existingProduct = await product.findById(id)

        if(!existingProduct){
            return res.status(404).json({success: false, message: "Product Not Found"});

        }
        await product.findByIdAndDelete(id);
        if(existingProduct.image){
            const oldImageName= existingProduct.image.split("/").pop();
            const oldImagePath = `./uploads/${oldImageName}`

            if(fs.existsSync(oldImagePath)){
                fs.unlinkSync(oldImagePath)
            }
        }
        return res.status(200).json({success: true, message: "Product deleted Successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}