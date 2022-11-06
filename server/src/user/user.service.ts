import { LoginDto } from './../auth/dto/login.dto';
import { hashPassword } from './password.helper';
import { RegisterDto } from '../auth/dto/register.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepo.findOneBy({ email });
  }

  async create(createUserDto: CreateUserDto) {
    let user = await this.findOneByEmail(createUserDto.email);
    if (user) {
      throw new HttpException('email already in use!', HttpStatus.BAD_REQUEST);
    }

    user = this.userRepo.create({
      ...createUserDto,
      password: hashPassword(createUserDto.password),
    });
    await this.userRepo.save(user);
    return user;
  }

  async login(dto: LoginDto): Promise<User> {
    dto.password = hashPassword(dto.password);

    return await this.userRepo.findOneBy(dto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
