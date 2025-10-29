import { Injectable } from '@nestjs/common';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async validateUser(): Promise<boolean> {
    return true;
  }
}
