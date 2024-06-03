import mongoose from "mongoose";
import multer from "multer"
import path from "path"
const __dirname = path.resolve(path.dirname(''))
const AVATAR_PATH = path.join("/uploads/user")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNo: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    bday: {
        day: {
            type: Number
        },
        month: {
            type: Number
        },
        year: {
            type: Number
        },
    }
}, {
    timestamps: true
})

try {
    let avatarStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, AVATAR_PATH))
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = new Date().getTime();
            cb(null, file.filename + '-' + uniqueSuffix)
        }
    })
    userSchema.statics.uploadAvatar = multer({ storage: avatarStorage }).single('avatar')
} catch (error) {
    console.log("ERROR IN MULTER CONFIGURATION ", error)
}

const User = mongoose.model("User", userSchema);
export default User

