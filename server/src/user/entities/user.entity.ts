import { Zone } from './../../zone/entities/zone.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Image } from 'src/image/entities/image.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 255 })
  email: string;

  @Column('varchar', { nullable: false, select: false })
  password: string;

  @Column('varchar', { nullable: true, length: 255 })
  name: string;

  @OneToMany(() => Zone, (zone) => zone.owner)
  zones: Zone[];

  @OneToMany(() => Image, (image) => image.creator)
  images: Image[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
