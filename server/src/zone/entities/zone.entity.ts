import { User } from './../../user/entities/user.entity';
import { Image } from 'src/image/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 255 })
  name: string;

  @Column('nvarchar', { nullable: false, length: 1000 })
  desc: string;

  @Column('boolean', { nullable: false, default: false, select: false })
  deleted: boolean;

  @Column({ nullable: true })
  location: string = null;

  @Column({nullable: true})
  address: string = null;

  @OneToMany(() => Image, (image) => image.zone, { cascade: true })
  images: Image[];

  @ManyToOne(() => User, (user) => user.zones)
  owner: User;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
