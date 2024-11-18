import { Router } from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import * as adminControllers from '../controllers/admin.controller.js'
import isLoggedIn from '../middleware/auth.middleware.js'

const router = Router()

router.get('/appointments', isLoggedIn, asyncHandler(adminControllers.getAllAppointments))
router.post('/make-appointment', isLoggedIn, asyncHandler(adminControllers.makeAppointment))
export default router