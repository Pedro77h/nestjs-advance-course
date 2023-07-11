import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/domain/users/users.module';
import { CommentsModule } from './app/domain/comments/comments.module';
import { DomainModule } from './app/domain/domain.module';

@Module({
  imports: [UsersModule, CommentsModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
