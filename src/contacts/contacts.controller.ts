import { Controller, Get } from '@nestjs/common';
import { contactcolumn } from './contact.entity';
import { ContactsService } from './contacts.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  index(): Promise<contactcolumn[]> {
    return this.contactsService.findAll();
  }

  @Post('create')
  async create(@Body() contactData: contactcolumn): Promise<any> {
    return this.contactsService.create(contactData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() contactData: contactcolumn,
  ): Promise<any> {
    contactData.id = Number(id);
    return this.contactsService.update(contactData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.contactsService.delete(id);
  }
}
