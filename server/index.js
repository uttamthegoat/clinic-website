/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express'
import mongoose from 'mongoose'
const app = express()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import GlobalErrorHandler from './utils/GlobalErrorHandler.js'
import ExpressError from './utils/ExpressError.js'
import authRoutes from './routes/auth.routes.js'

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || 'fallback_url_here'
    await mongoose.connect(mongoUrl)
    console.log('Connected to Mongo successfully')
  } catch (err) {
    console.log('Error while connecting to database:', err)
  }
}
connectDB()

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: 'http://localhost:5173',
  // origin: '',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get('/', (req, res) => {
  res.json('Final Year Project')
})

// all routes
app.use('/api/v1/auth', authRoutes)

// wrong routes handler
app.all('*', (req, res, next) => {
  try {
    new ExpressError(404, false, 'Page not found')
  } catch (error) {
    next(error)
  }
})

app.use(GlobalErrorHandler)

app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}`)
})