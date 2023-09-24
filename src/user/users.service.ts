import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/createUserDto";
import { UpdateUserDto } from "./dtos/updateUserDtop";


@Injectable()
export class UserService{

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

  findAll() {
    return 'All Users'
  }

  async findOne(id:number) {
    return await this.userRepo.find({ where: { id: id } });
  }


  async findOneWithUserName(userName: string) {
    return await this.userRepo.findOne({ where: { email: userName } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    await this.userRepo.save(user);
    const { password, ...result } = user;
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }
}