import { IsNotEmpty } from 'class-validator';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Translation {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ name: 'source' })
    public source: string;

    @IsNotEmpty()
    @Column({ name: 'destination' })
    public destination: string;

    @IsNotEmpty()
    @Column()
    public text: string;

    @IsNotEmpty()
    @Column({ name: 'translated_text' })
    public translatedText: string;
}
