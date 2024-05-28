// import { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
// import version from '../package.json' assert { type: 'json' }

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Documentation',
      version: '1.0.0',
      description: 'API Documentation for Job Listings',
    },
    components: {},
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
    schemes: ['http', 'https'],
  },
  apis: ['./routes/*.js', './models/*.js'],
}

const specs = swaggerJsdoc(options)

const swaggerDocs = (app, port) => {
  // Swagger PAGE
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

  // Swagger DOCS in JSON format
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })

  console.log(
    `API Documentation available at http://localhost:${port}/api-docs`,
  )
}

export default swaggerDocs
