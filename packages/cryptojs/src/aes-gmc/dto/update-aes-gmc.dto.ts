import { PartialType } from '@nestjs/mapped-types';
import { CreateAesGmcDto } from './create-aes-gmc.dto';

export class UpdateAesGmcDto extends PartialType(CreateAesGmcDto) {}
