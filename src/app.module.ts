import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatModule, DogModule],
})
export class AppModule {}
