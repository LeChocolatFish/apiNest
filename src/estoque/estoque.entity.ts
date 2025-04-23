import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estoque')
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NM_produto: string;

  @Column()
  qt_produto: number;

  @Column('decimal', { precision: 10, scale: 2 })
  valor_unitario: number;
}
