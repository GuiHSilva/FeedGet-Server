import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { MailService, SendMailData } from "../services/mail-service";

interface SendFeedbackFunctionRequest { 
    type: string, 
    message: string,
    screenshot?: string
}


export class SendFeedbackFunction {

    constructor( 
        private feedbackRepository: FeedbacksRepository,
        private mailService: MailService,
    ) {  }

    async execute(request: SendFeedbackFunctionRequest) {
        const { type, message, screenshot } = request

        await this.feedbackRepository.create({ type, message, screenshot })

        await this.mailService.sendMail({
            subject: 'Novo feedback',
            body: [
                '<p>Um novo feedback foi enviado.</p>',
                `<p>Tipo: ${type}</p>`,
                `<p>Message: ${message}</p>`,
                `<p><img src="${screenshot}"></p>`
            ].join('')
        })
    }

}