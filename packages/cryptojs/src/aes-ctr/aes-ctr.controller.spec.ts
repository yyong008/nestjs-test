import { Test, TestingModule } from '@nestjs/testing';
import { AesCtrController } from './aes-ctr.controller';
import { AesCtrService } from './aes-ctr.service';

describe('AesCtrController', () => {
  let controller: AesCtrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesCtrController],
      providers: [AesCtrService],
    }).compile();

    controller = module.get<AesCtrController>(AesCtrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
