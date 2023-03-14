import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class contactColumn {
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
  City: string;
}
