import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto, CreateUserResponseDTO } from './dtos/user.dto';

@ApiTags('users')
@ApiBearerAuth('authorization')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
  }),
)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    type: [CreateUserResponseDTO],
    description: 'user fetched successfully',
  })
  @ApiOperation({ description: 'fetch all users' })
  @ApiConsumes('application/json')
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.fetchUsers();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    type: CreateUserResponseDTO,
    description: 'user created successfully',
  })
  @ApiOperation({ description: 'create user' })
  @ApiConsumes('application/json')
  @Post()
  async create(@Body() body: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.createUser(body);
  }
}
