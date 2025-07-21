import express from 'express'
import { recibirNotificacion } from '../controllers/webhook.controller.js'

const webhookRouter = express.Router()

webhookRouter.post('/notificaciones', recibirNotificacion)

export default webhookRouter