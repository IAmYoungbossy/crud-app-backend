import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class contactcolumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  'First Name': string;

  @Column()
  'Last Name': string;

  @Column()
  Country: string;

  @Column()
  Email: string;

  @Column()
  Phone: string;

  @Column()
  City: string;
}
