import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contactcolumn } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([contactcolumn])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
