import { Module } from '@nestjs/common';
import { DBModule } from '@dev/database';
import { UserEntity } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
export class DomainModule {}
