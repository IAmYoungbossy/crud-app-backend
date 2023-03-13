import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { contactcolumn } from './contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(contactcolumn)
    private contactRepository: Repository<contactcolumn>,
  ) {}

  async findAll(): Promise<contactcolumn[]> {
    return await this.contactRepository.find();
  }

  async create(contact: contactcolumn): Promise<contactcolumn> {
    return await this.contactRepository.save(contact);
  }

  async update(contact: contactcolumn): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
