import { Module } from '@nestjs/common';
import { Services } from 'src/utils/const';
import { UsersService } from './users.service';

@Module({
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
