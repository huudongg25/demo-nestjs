import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDTO {
    @MinLength(8, {
      message: 'Password is too short'
    })
    @IsNotEmpty()
    password:string
    
    @IsEmail()
    email:string

    @IsNotEmpty()
    address:string

  }