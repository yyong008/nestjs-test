import { Test, TestingModule } from '@nestjs/testing';
import { AesEcbController } from './aes-ecb.controller';
import { AesEcbService } from './aes-ecb.service';

describe('AesEcbController', () => {
  let controller: AesEcbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesEcbController],
      providers: [AesEcbService],
    }).compile();

    controller = module.get<AesEcbController>(AesEcbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
