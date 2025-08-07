import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Account } from 'src/entities/account.entity';
import { AccountService } from '../account/account.service';
import { LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}
  /**
   * Logs in a user and returns a JWT token.
   * @param loginDto The user login data.
   * @returns A string containing the JWT token.
   * @throws UnauthorizedException If email or password is invalid.
   *
   */
  async login(loginDto: LoginDto): Promise<Account | null> {
    const user = await this.accountService.checkEmail(loginDto.email);
    if (!user)
      throw new UnauthorizedException(
        'invalid credentials/This Email is not registered',
      );
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('invalid credentials');
    }
    return user;
  }

  async generatJwtToken(user: Account): Promise<string> {
    const token = await this.jwtService.signAsync({
      name: user.username,
      sub: user.id,
    });
    return token;
  }
}
