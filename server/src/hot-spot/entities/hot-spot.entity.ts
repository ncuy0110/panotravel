import { Image } from '../../image/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class HotSpot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Image, (image) => image.hotSpots)
  parent: Image;

  @Column('float', { nullable: false })
  yaw: number = 0;

  @Column('float', { nullable: false })
  pitch: number = 0;

  @Column({ type: 'simple-json', nullable: true })
  redirect: {};

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
