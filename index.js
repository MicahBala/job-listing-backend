import express from 'express'
import { PORT, mongoDBUrl } from './config.js'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import jobsRoute from './routes/jobsRoute.js'
import swaggerDocs from './utils/swagger.js'

const app = express()

app.use(cors())
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
