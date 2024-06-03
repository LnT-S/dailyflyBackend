import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import SuperAdmin from '../models/SuperAdmin.js';

export const createSession = async (req, res) => {
    console.log("API /admin/create-session");
    try {
        const { id, pass } = req.body
        if (id === process.env.ADMIN_ID && pass === process.env.ADMIN_PASS) {
            let user = {id,pass,type:"superadmin"}
            let token = jwt.sign(user, 'dailyfly2new', { expiresIn: `9h` })
            return res.status(200).json({
                message: "Session Created!! Here is your token",
                token: token
            })
        } else {
            return res.status(400).json({
                message: "Invalid User Name or Password"
            })
        }
    } catch (err) {
        console.log("/admin/create-session", err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const addAdmin = async (req,res)=>{
    console.log("/superadmin/add-admin",req.superadmin)
    try {
        return res.status(200).json({
            message : "Route Accessed"
        })
    } catch (error) {
        
    }
}