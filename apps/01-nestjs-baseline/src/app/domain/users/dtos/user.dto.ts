import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'email',
    example: 'johndoe@gmail.com',
    required: true,
  })
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'username',
    example: 'john doe',
    required: true,
  })
  @IsDefined()
  @IsString()
  username: string;
}

export class CreateUserResponseDTO {
  @ApiResponseProperty({
    example: 'd6e2fc7b-2929-4f69-af4b-da674d6ad97a',
    type: 'v4',
  })
  uuid: string;

  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 'john doe',
  })
  username: string;
}
