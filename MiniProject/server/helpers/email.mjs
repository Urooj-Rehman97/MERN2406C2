import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.dirname))

export const sendEmail = async(to, subject, text)=>{
try {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: "urooj_rehman@aptechnorth.edu.pk",
            pass: "amhxrebzexynqsm"
    }
    });
    await transporter.sendMail({
        from: "urooj_rehman@aptechnorth.edu.pk",
        to:to,
        subject: subject,
        text: text

    })
} catch (error) {
    console.log(error)
}
}