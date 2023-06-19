import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/create.dts';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwt: JwtService,
  ) {}

  async signup(user: CreateUserDto): Promise<UserEntity> {
    const { username } = user;
    const existUser = await this.userRepository.findOne({
      where: { username },
    });
    if (existUser) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const foundUser = await this.userRepository.findOneBy({ username });
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };

    return this.jwt.sign(payload);
  }
}
