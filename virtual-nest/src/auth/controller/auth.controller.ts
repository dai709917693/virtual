import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create.dts';
import { LocalAuthGuard } from '../local.guard';
import { Public } from 'src/common/decorator';

@Controller('api/v1/auth/')
export class AuthController {
  constructor(private usersService: AuthService) {}

  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  @Post('signup')
  async signup(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.usersService.signup(user);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.usersService.login(req.user);
  }
}
