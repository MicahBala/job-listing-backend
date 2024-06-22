import express from 'express'
import { PORT, mongoDBUrl } from './config.js'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import jobsRoute from './routes/jobsRoute.js'
import swaggerDocs from './utils/swagger.js'

const app = express()

app.use(
  cors({
    origin: '*', // Replace '*' with the specific origin(s) you want to allow
    methods: 'GET, POST, PUT, DELETE', // Specify the allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Specify the allowed headers
  }),
)

app.use(morgan('tiny'))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/jobs', jobsRoute)

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
      swaggerDocs(app, PORT)
    })
  })
  .catch((err) => console.log(err))
