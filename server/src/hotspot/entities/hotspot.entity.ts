import { Image } from './../../image/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Hotspot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Image, (image) => image.hotspot)
  parent: Image;

  @Column('float', { nullable: false })
  yaw: number = 0;

  @Column('float', { nullable: false })
  pitch: number = 0;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
