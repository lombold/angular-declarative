import { formPage } from './application-extensions';
import { of } from 'rxjs';
import { ADForm } from '@lombold/angular-form-engine';

describe('Application Extensions', () => {
  describe('FormPage', () => {
    it('should create an instance', () => {
      const form = {
        fields: [
          { name: 'firstname', label: 'First Name', value: '', type: 'text' },
          { name: 'lastname', label: 'Last Name', value: '', type: 'text' },
        ],
        title: 'Foo Form',
        submitButtonText: 'Submit',
      } as ADForm<{ firstname: string; lastname: string }>;
      expect(formPage('Foo Form', form, () => of())).toBeTruthy();
    });
  });
});
