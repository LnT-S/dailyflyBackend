import express from "express"
import passport from "passport"
import { addAdmin, createSession } from "../../controllers/AdminControllers.js"
import { jwtSuperAdminAuth } from "../../middlewares/jwtAuthCheck.js"
const router = express.Router()

router.post("/create-session",createSession)
router.post("/add-admin",jwtSuperAdminAuth,addAdmin)

export default router