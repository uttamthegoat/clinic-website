import { Router } from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import * as authControllers from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', asyncHandler(authControllers.registerUser))
router.post('/login', asyncHandler(authControllers.loginUser))
router.get('/check-auth', asyncHandler(authControllers.checkAuth))
router.get('/logout', asyncHandler(authControllers.logoutUser))

export default router