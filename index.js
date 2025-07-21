import express from 'express'
import webhookRouter from './src/routes/webhook.router.js'

const app = express()

app.use(express.json())


app.use('/webhook', webhookRouter)


export default app