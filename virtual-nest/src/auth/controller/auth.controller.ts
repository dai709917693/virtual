import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create.dts';

@Controller('api/v1/auth/')
export class AuthController {
  constructor(private usersService: AuthService) {}

  @Post('signup')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  async signup(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.usersService.signup(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.usersService.login(req.user);
  }
}
