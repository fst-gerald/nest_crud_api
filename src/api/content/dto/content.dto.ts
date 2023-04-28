import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsString} from 'class-validator';

export class ContentDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  title: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  details: string;
}