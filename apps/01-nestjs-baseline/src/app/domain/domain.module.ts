import { LoggerMiddleware } from './../core/middleware/log-.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DBModule } from '@dev/database';
import { UserEntity } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AppLogMiddleware } from '../core/middleware/App-log.middleware';
import { UsersController } from './users/users.controller';
@Module({
  imports: [
    UsersModule,
    DBModule.forRoot({
      entities: [UserEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DomainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /*  a unique middleware
    consumer.apply(LoggerMiddleware).forRoutes('users'); */

    // two or more
    consumer
      .apply(LoggerMiddleware, AppLogMiddleware)
      .forRoutes(UsersController);
  }
}
