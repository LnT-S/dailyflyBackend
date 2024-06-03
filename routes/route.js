import express from "express"
const router = express.Router()

import admin from './admin/index.js'
import client from './client/index.js'

router.use("/admin",admin)
router.use("/client",client)

export default router