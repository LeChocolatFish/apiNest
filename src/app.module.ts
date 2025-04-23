import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstoqueModule } from './estoque/estoque.module';
import { Estoque } from './estoque/estoque.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'controle_estoque',
      entities: [Estoque],
      synchronize: false, // já que a tabela foi criada via script
    }),
    EstoqueModule,
  ],
})
export class AppModule {}
