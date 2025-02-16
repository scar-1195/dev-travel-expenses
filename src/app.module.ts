import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validation-env';
import { TravelAssistantModule } from './travel-assistant/travel-assistant.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema }),
    TravelAssistantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
