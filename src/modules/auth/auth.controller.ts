import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtServices: JwtService,
  ) {}
  /**
   * Handles user login requests.
   * @param loginDto The user login DTO data.
   * @returns The response from the authentication service.
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    // const payload = {
    //   email: request.account.email,
    //   sub: request.account.id,
    // };
    // const token = this.jwtServices.sign(payload);
    // const access_token = this.authService.generatJwtToken(request.user);
    // response.cookie('jwt', token, { httpOnly: true });
    // return {
    //   message: 'Successfully logged in',
    // };
    return true;
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  user(@Request() request: { user: any }) {
    return request.user;
  }
}
