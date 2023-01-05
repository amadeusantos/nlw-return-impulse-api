import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'data:image/png;base64,test.png'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
     
    it('should not be able to submit feedbaack without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo comment',
            screenshot: 'data:image/png;base64,test.png'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedbaack without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.png'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedbaack with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'test.png'
        })).rejects.toThrow();
    });
})