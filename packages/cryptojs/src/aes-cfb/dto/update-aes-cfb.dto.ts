import { PartialType } from '@nestjs/mapped-types';
import { CreateAesCfbDto } from './create-aes-cfb.dto';

export class UpdateAesCfbDto extends PartialType(CreateAesCfbDto) {}
