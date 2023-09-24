import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto{
  @IsString()
  @Length(3, 30)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(3)
  password: string;
  
}