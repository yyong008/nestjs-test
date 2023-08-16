import { Test, TestingModule } from '@nestjs/testing';
import { AesCfbController } from './aes-cfb.controller';
import { AesCfbService } from './aes-cfb.service';

describe('AesCfbController', () => {
  let controller: AesCfbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesCfbController],
      providers: [AesCfbService],
    }).compile();

    controller = module.get<AesCfbController>(AesCfbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
