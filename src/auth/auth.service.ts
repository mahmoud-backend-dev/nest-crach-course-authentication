import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/users.service";
import * as bcrypt from 'bcrypt';
import { User } from "src/entities/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }
  
  async validateUser(userName: string, password: string) {
    const user = await this.userService.findOneWithUserName(userName);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user:User) {
    const payload = {
      userName: user.email,
      sub: {
        name: user.name,
      }
    };
    return {
      ...user,
      accessToken:this.jwtService.sign(payload)
    }
  }
}