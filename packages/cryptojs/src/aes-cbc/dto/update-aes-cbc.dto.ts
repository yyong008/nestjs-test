import { PartialType } from '@nestjs/mapped-types';
import { CreateAesCbcDto } from './create-aes-cbc.dto';

export class UpdateAesCbcDto extends PartialType(CreateAesCbcDto) {}
