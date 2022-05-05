import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
    
    async create({message, type, screenshot}: FeedbackCreateData) {

        await prisma.feedback.create({
            data: {
                message,
                type, 
                screenshot
            }
        })

    };

}