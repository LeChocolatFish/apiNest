import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque])],
  providers: [EstoqueService],
  controllers: [EstoqueController],
})
export class EstoqueModule {}
