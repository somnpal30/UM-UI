import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user-service')
export class UserController {
  constructor(private userService : UserService) { }

  @Get("/users")
  getUsers() : User[] {
    return  this.userService.getUsers();
  }

  @Get("/users/:name")
  findUserByFirstName(@Param('name') name ) : User{
    return this.userService.getUsersByName(name);
  }


  @Delete("/users/:name")
  deleteUser(@Param('name') name ): string{
    this.userService.deleteUser(name);
    return name + " deleted ."
  }

  @Post("/users")
  createUser(@Body() user: User) : string {
    return " user created ";
  }

  @Put("/users/:name")
  updateUser(@Param('name') name, @Body() user: User) : string {
    return " user Updated ";
  }
}
