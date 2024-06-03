import mongoose from "mongoose"

const superAdminSchema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        default : "dailyfly@firefly.com"
    },
    password : {
        type : String,
        default : "dailyfly1906"
    },
    email : {
        type : String,
        unique : true
    },
},{
    timestamps : true
})
const SuperAdmin = mongoose.model("SuperAdmin",  superAdminSchema)
export default SuperAdmin