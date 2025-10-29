export interface IAuthService {
  validateUser(): Promise<boolean>;
}
