import express from 'express' 
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SendFeedbackFunction } from './functions/send-feedback-function';
import { NodemailerMailService } from './services/nodemailer/nodemailer-mail-service';

const route = express.Router()


route.post('/feedback', async (req, res) => { 

    const { message, type, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerService = new NodemailerMailService()

    const sendFeedbackfunction = new SendFeedbackFunction(
        prismaFeedbackRepository,
        nodemailerService
    )

    await sendFeedbackfunction.execute({
        type,
        message,
        screenshot
    })
 

    let html = [
        '<p>Um novo feedback foi enviado.</p>',
        `<p>Tipo: ${type}</p>`,
        `<p>Message: ${message}</p>`,
        `<p>Screenshot: <img src="${screenshot}"></p>` 
    ].join()


    return res.status(201).json({
        response: true
    }) 
 
}) 

export default route