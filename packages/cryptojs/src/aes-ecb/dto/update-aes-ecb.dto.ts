import { PartialType } from '@nestjs/mapped-types';
import { CreateAesEcbDto } from './create-aes-ecb.dto';

export class UpdateAesEcbDto extends PartialType(CreateAesEcbDto) {}
