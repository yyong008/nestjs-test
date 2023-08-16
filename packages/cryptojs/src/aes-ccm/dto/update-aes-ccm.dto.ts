import { PartialType } from '@nestjs/mapped-types';
import { CreateAesCcmDto } from './create-aes-ccm.dto';

export class UpdateAesCcmDto extends PartialType(CreateAesCcmDto) {}
