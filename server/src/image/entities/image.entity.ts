import { User } from './../../user/entities/user.entity';
import { Zone } from './../../zone/entities/zone.entity';
import { HotSpot } from '../../hot-spot/entities/hot-spot.entity';
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

  @Column({ type: 'varchar', length: 255, nullable: false })
  objectName: string;

  @Column('float', { nullable: true })
  yaw: number = 0;

  @Column('float', { nullable: true })
  pitch: number = 0;

  @Column('float', { nullable: true })
  hfov: number = 0;

  @OneToMany(() => HotSpot, (hotSpot) => hotSpot.parent)
  hotSpots: HotSpot[];

  @ManyToOne(() => Zone, (zone) => zone.images)
  zone: Zone;

  @Column('boolean', { nullable: false, default: false })
  isRoot: boolean;

  @ManyToOne(() => User, (user) => user.images)
  creator: User;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
