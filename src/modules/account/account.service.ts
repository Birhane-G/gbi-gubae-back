import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly userRepository: Repository<Account>,
  ) {}
  /**
   *  Checks if a email with the given email exists.
   *  @param email The emial of the user to check.
   *  @returns The `user` object if found, otherwise `null`.
   */
  async checkEmail(email: string): Promise<Account | null> {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['UserRole'],
    });
  }
  /**
   *  Checks if a username with the given username exists.
   *  @param username The username of the user to check.
   *  @returns The `user` object if found, otherwise `null`.
   */
  async checkUserName(username: string): Promise<Account | null> {
    return await this.userRepository.findOne({ where: { username } });
  }
  /**
   * Retrieves all Users.
   * @returns An array of `users` objects, or null if no users are found.
   */
  async findAllUsers(): Promise<Account[] | null> {
    return await this.userRepository.find();
  }
  /**
   * Retrieves one User by user_id.
   * @returns An array of `user` objects, or null if no user are found.
   */
  async findUserById(id: string): Promise<Account | null> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    return user;
  }
}
