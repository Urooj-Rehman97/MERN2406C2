import { sendEmail } from "../helpers/email.mjs";

// http://localhost:3000/project/sendEmail

export const emailsending = async(req,res)=>{
try {
    const {name, email,subject,message} = req.body;
    await sendEmail(email, subject,message)
    res.send({message: "Email Send Successfully"})
} catch (error) {
    res.send({ErrorMessage: error.message})
}
}
