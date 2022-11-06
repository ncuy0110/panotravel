import { hashPassword } from './../password.helper';
import { Zone } from './../../zone/entities/zone.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
