import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<CartEntity> {
    return this.cartRepository.save(createCartDto);
  }

  async findAll(): Promise<CartEntity[]> {
    return this.cartRepository.find();
  }

  async findOne(id: string): Promise<CartEntity> {
    return this.cartRepository.findOneBy({ shoppingCartId: id });
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<void> {
    const cart = await this.findOne(id);

    if (!cart) {
      throw new BadRequestException({ message: 'Cart not found' });
    }
    await this.cartRepository.update(id, updateCartDto);
  }

  async remove(id: string): Promise<void> {
    const cart = await this.findOne(id);

    if (!cart) {
      throw new BadRequestException({ message: 'Cart not found' });
    }
    await this.cartRepository.delete(id);
  }
}
