import { Test, TestingModule } from '@nestjs/testing';
import { AesOfbController } from './aes-ofb.controller';
import { AesOfbService } from './aes-ofb.service';

describe('AesOfbController', () => {
  let controller: AesOfbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesOfbController],
      providers: [AesOfbService],
    }).compile();

    controller = module.get<AesOfbController>(AesOfbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
