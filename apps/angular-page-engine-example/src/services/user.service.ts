import { Injectable } from '@angular/core';
import { User } from '../ui-components/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  saveUser(value: User): Promise<void> {
    return new Promise<void>((resolve) => {
      alert(`User saved: ${JSON.stringify(value)}`);
      resolve();
    });
  }
}
