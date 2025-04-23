import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estoque } from './estoque.entity';
@Injectable()
export class EstoqueService {
 constructor(
 @InjectRepository(Estoque)
 private estoqueRepository: Repository<Estoque>,
 ) {}
 findAll(): Promise<Estoque[]> {
 return this.estoqueRepository.find();
 }
}