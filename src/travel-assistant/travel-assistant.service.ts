import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import {
  createThreadUseCase,
  createMessageUseCase,
  createRunUseCase,
  checkCompleteStatusUseCase,
} from './use-cases';
import { QuestionDto } from './dtos/question.dto';
import { getMessageListUseCase } from './use-cases/get-message-list.use-case';

@Injectable()
export class TravelAssistantService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  createThread() {
    return createThreadUseCase(this.openai);
  }

  async userQuestion(questionDto: QuestionDto) {
    const { question, threadId } = questionDto;

    // The message received in the front is created
    await createMessageUseCase(this.openai, { question, threadId });

    // A run is created to start working with the conversation
    const run = await createRunUseCase(this.openai, { threadId });

    // A recursive check is made of the status of the conversation
    await checkCompleteStatusUseCase(this.openai, {
      runId: run.id,
      threadId: threadId,
    });

    // All messages within the thread are obtained
    const messages = await getMessageListUseCase(this.openai, { threadId });

    return messages;
  }
}
