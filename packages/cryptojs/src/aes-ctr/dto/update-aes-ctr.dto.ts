import { PartialType } from '@nestjs/mapped-types';
import { CreateAesCtrDto } from './create-aes-ctr.dto';

export class UpdateAesCtrDto extends PartialType(CreateAesCtrDto) {}
