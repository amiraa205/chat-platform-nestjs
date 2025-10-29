/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { IUserService } from './users';
import { CreateUserDetails } from 'src/utils/types';
@Injectable()
export class UsersService implements IUserService {
  createUser(userDetails: CreateUserDetails) {
    console.log('UserServices.createUser');
  }
}
