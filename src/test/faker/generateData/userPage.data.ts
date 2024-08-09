import { faker } from '@faker-js/faker';

export interface User {
  firstName: string;
  lastName: string;
  zipcode: string;
}

export default class UserData {
  static generateUser(): User {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      zipcode: faker.location.zipCode(),
    };
  }
}
