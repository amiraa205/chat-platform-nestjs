/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  constructor() {}

  async validateUser(): Promise<boolean> {
    return true;
  }
}
