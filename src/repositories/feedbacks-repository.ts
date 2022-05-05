export interface FeedbackCreateData {
    type: string,
    message: string, 
    screenshot?: string
}

export interface FeedbacksRepository{ 
    create: (data: FeedbackCreateData) => Promise<void>
}