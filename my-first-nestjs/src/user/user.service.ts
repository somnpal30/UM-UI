import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {

  users: User[];

  constructor() {
    console.log('*******************');
    this.users = [
      {
        'id': '5f2e6cb479eecfa1f1eceab6',
        'name': 'Joyce Kirk',
        'age': 40,
        'gender': 'female',
        'company': 'SHADEASE',
        'email': 'joycekirk@shadease.com',
        'phone': '+1 (940) 498-3935',
        'address': '991 Beadel Street, Yogaville, Montana, 8891',
      },
      {
        'id': '5f2e6cb4f3c6e31ceb5f6287',
        'name': 'Janell Lane',
        'age': 30,
        'gender': 'female',
        'company': 'NURALI',
        'email': 'janelllane@nurali.com',
        'phone': '+1 (970) 592-3382',
        'address': '762 Schweikerts Walk, Worton, Idaho, 6354',
      },
      {
        'id': '5f2e6cb4a2619297a97637f7',
        'name': 'Theresa Conrad',
        'age': 35,
        'gender': 'female',
        'company': 'HONOTRON',
        'email': 'theresaconrad@honotron.com',
        'phone': '+1 (807) 469-2478',
        'address': '501 Lewis Place, Kimmell, Wyoming, 6459',
      },
      {
        'id': '5f2e6cb4d414e200bbee353f',
        'name': 'Roxanne Rocha',
        'age': 26,
        'gender': 'female',
        'company': 'GALLAXIA',
        'email': 'roxannerocha@gallaxia.com',
        'phone': '+1 (956) 497-2359',
        'address': '887 Linden Boulevard, Hiwasse, Rhode Island, 6100',
      },
      {
        'id': '5f2e6cb4cb6c0ac519cd6e1f',
        'name': 'Rachel Terrell',
        'age': 25,
        'gender': 'female',
        'company': 'TECHADE',
        'email': 'rachelterrell@techade.com',
        'phone': '+1 (868) 481-3334',
        'address': '450 Louisa Street, Ahwahnee, Hawaii, 6941',
      },
    ];

  }

  getUsers(): User[] {
    return this.users;
  }

  getUsersByName(name: string): User {

    return this.users.find(u => u.name === name);
  }

  deleteUser(name: string): void {
    const index = this.users.findIndex( u => u.name === name);
    this.users.splice(index,1);
  }
}
