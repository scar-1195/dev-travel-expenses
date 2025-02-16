import { Body, Controller, Post } from '@nestjs/common';
import { TravelAssistantService } from './travel-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('travel-assistant')
export class TravelAssistantController {
  constructor(
    private readonly travelAssistantService: TravelAssistantService,
  ) {}

  @Post('create-thread')
  createThread() {
    return this.travelAssistantService.createThread();
  }

  @Post('user-question')
  userQuestion(@Body() questionDto: QuestionDto) {
    return this.travelAssistantService.userQuestion(questionDto);
  }
}
