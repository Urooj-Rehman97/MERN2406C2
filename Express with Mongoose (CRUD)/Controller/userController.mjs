import user from "../Model/user.mjs";
// http://localhost:3000/api/insert
export const create = async(req,res)=>{
 try {
    const {name, email,password} = req.body;
    const  newUser = await new user({
      name: name,
      email: email,
      password: password  
    })
    await newUser.save();
    res.send({message: "User Register Successfully...."})
 } catch (error) {
    res.send({ErrorMessage: error.message})
 }
}

// http://localhost:3000/api/fetch
export const getAll = async(req,res)=>{
   try {
    const result = await user.find({})
    if(result){
        res.send({result})
    }else{
        res.send({message: "No data Found"})
    }
   } catch (error) {
    res.send({ErrorMessage: error.message})

   }
}

// http://localhost:3000/api/update/:id

export const update = async(req,res)=>{
    try {
        const id = req.params.id
        const result = await user.findByIdAndUpdate(id, req.body)
        res.send({message: "User Updated Successfully.. ", result})
    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}

// http://localhost:3000/api/delete/:id

export const del = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedUser = await user.findByIdAndDelete(id)
        res.send({message: "User Deleted Successfully..", deletedUser})
    } catch (error) {
        console.log(error)
        res.send({ErrorMessage: error.message})

    }
}
