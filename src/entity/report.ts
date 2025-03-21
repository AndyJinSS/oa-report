// entity/template.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  mbId: string;
  @Column({ nullable: true })
  description?: string;
  @Column()
  userId: number;
  @Column({ nullable: true, default: false })
  deleted: boolean;
}
