import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private jwtAuthGuard: JwtAuthGuard) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    await this.jwtAuthGuard.canActivate(context);
    return true;
  }
}
