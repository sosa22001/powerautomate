import express from 'express'
import webhookRouter from './routes/webhook.router.js'

const app = express()

app.use(express.json())

app.listen(4000, () =>{
    console.log('Server Listen on port 4000')
})

app.use('/webhook', webhookRouter)