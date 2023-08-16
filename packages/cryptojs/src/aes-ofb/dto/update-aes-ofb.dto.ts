import { PartialType } from '@nestjs/mapped-types';
import { CreateAesOfbDto } from './create-aes-ofb.dto';

export class UpdateAesOfbDto extends PartialType(CreateAesOfbDto) {}
