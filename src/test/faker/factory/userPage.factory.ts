import UserData from '../generateData/userPage.data';
import { User } from '../generateData/userPage.data';

export default class UserFactory {
  static generateUserData(): User {
    const userData = UserData.generateUser();
    return {
      firstName: userData.firstName,
      lastName: userData.lastName,
      zipcode: userData.zipcode,
    };
  }
}
