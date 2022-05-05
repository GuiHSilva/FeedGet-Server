import { SendFeedbackFunction } from "./send-feedback-function"

const sendFeedback = new SendFeedbackFunction(
    { create: async () => {} },
    { sendMail: async () => {} },
)

describe('Send feedback', () => {
    it('should be able to submit a feedback' , async() => {
        await expect(sendFeedback.execute({
            type: 'BUG',
            message: 'Testing a bug',
            screenshot: 'data:image/png;base64,abcd123'
        })).resolves.not.toThrow()
    })
})