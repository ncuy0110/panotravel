import { Zone } from './../../zone/entities/zone.entity';
import { Hotspot } from './../../hotspot/entities/hotspot.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 255 })
  name: string;

  @Column('float', { nullable: true })
  yaw: number = 0;

  @Column('float', { nullable: true })
  pitch: number = 0;

  @Column('float', { nullable: true })
  hfov: number = 0;

  @OneToMany(() => Hotspot, (hotspot) => hotspot.parent)
  hotspot: Hotspot[];

  @ManyToOne(() => Zone, (zone) => zone.images)
  zone: Zone;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
