import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { contactColumn } from './contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(contactColumn)
    private contactRepository: Repository<contactColumn>,
  ) {}

  async findAll(): Promise<contactColumn[]> {
    return await this.contactRepository.find();
  }

  async create(contact: contactColumn): Promise<contactColumn> {
    return await this.contactRepository.save(contact);
  }

  async update(contact: contactColumn): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
