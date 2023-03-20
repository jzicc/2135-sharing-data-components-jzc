import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() {}

 getEmployees() {
    return [
      {
        ID: 101,
        FirstName: 'Freddie',
        LastName: 'Baker',
        Email: 'fbaker@gmail.com',
      },
      {
        ID: 102,
        FirstName: 'Donna',
        LastName: 'Autumn',
        Email: 'dautumn@yahoo.com',
      },
      {
        ID: 103,
        FirstName: 'Johnny',
        LastName: 'Bravo',
        Email: 'jbravo@gmail.com',
      },
      {
        ID: 104,
        FirstName: 'Zac',
        LastName: 'Carreon',
        Email: 'zac.carreon02@gmail.com',
      },
    ];
  }
}
