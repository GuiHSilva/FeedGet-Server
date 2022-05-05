import { MailService, SendMailData } from "../mail-service";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d7abff38984fa4",
        pass: "3cfd4e7edf26dd"
    }
});

export class NodemailerMailService implements MailService {

    async sendMail({ body, subject }: SendMailData) {
        
        await transport.sendMail({
            from: 'Formulário de feedback <contato@feedget.com>', 
            replyTo: 'guilherme22001@gmail.com',
            to: 'Guilherme H <guilherme22001@gmail.com>',
            subject: subject,
            html: body
        })
    
    };

}