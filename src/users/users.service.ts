import { Injectable } from '@nestjs/common';

interface IUser {
    userId: number;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: IUser[] = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
    
      async findOne(username: string): Promise<IUser | undefined> {
        return this.users.find(user => user.username === username);
      }
}
