import { Module } from '@nestjs/common';
import { TravelAssistantService } from './travel-assistant.service';
import { TravelAssistantController } from './travel-assistant.controller';

@Module({
  controllers: [TravelAssistantController],
  providers: [TravelAssistantService],
})
export class TravelAssistantModule {}
