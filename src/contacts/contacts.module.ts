import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contactColumn } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([contactColumn])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
