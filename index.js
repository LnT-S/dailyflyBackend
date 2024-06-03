//Importing Important Stuff
import dotenv from 'dotenv'
import express from 'express'
const app = express() //Starting Express Application
import routes from './routes/route.js'
import cors from 'cors'
import path from 'path'
import expressLayouts from 'express-ejs-layouts'
import expressEjsLayouts from 'express-ejs-layouts'
import db from './config/mongoose.js'
import jwt_strategy from './config/passport_jwt.js'

//Configuring environment vairables
dotenv.config()

//Declaring Const Vairables
const __dirname = path.resolve(path.dirname(''));
const PORT = process.env.PORT || 8000

//Setting Views and Layouts
app.set('view engine','ejs')
app.set('views',['./views'])
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.set('view options',{layout : true})

//Declaring Middlewares
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./assets'))
app.use(expressLayouts)
app.use('/uploads', express.static(__dirname + '/uploads')) //For downloading and uploading multipart data
app.use('/',routes)

try {
    app.listen(PORT, err => {
        if(err){
            console.log("ERROR CONNECTING TO PORT ",PORT)
            return
        }
        console.log('SUCCESSFULLY CONNECTED TO PORT ',PORT)
    })
} catch (error) {
    console.log("ERROR CONNECTING TO PORT ",PORT)
}