import { Module } from '@nestjs/common';
import { DBModule } from '@dev/database';
import { UserEntity } from './users/user.entity';
@Module({
  imports: [
    DBModule.forRoot({
      entities: [UserEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
