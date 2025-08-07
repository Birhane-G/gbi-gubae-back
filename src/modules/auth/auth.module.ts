import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '../account/account.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Account } from 'src/entities/account.entity';
import { AccountService } from '../account/account.service';
import { LocalStrategy } from './guard/local.strategy';

@Module({
  imports: [
    forwardRef(() => AccountModule),
    JwtModule.register({
      global: true,
      secret:
        'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Account]),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy, AccountService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
