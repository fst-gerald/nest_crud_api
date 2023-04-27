import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsString} from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  password: string;
}