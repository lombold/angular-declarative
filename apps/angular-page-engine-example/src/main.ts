import { application, formPage, HeaderComponent, htmlPage, page, textPage } from '@lombold/angular-page-engine';
import { CustomComponent } from './ui-components/custom-component';
import { SubPage } from './ui-components/sub-page';
import { userForm } from './forms/user-form';

application(
  HeaderComponent,
  page('Home'),
  page('About'),
  textPage(
    'Where to find us (text)',
    `
    You can find us at:
    123 Main St.
    Anytown, USA
    `
  ),
  htmlPage(
    'Where to find us (html)',
    `
    You can find us at:
    <address>
      <strong>Any Company</strong><br />
      123 Main St.<br />
      Anytown, USA<br />
    </address>
  `
  ),
  page('Custom Component', CustomComponent),
  page('Component with children', SubPage, [
    htmlPage('Child 1', '<p>Wichtige Seite</p>'),
    htmlPage('Child 2', '<a href="https://example.com">Example Link</a>'),
    formPage('User Form', userForm),
  ])
).catch((reason) => console.log(reason));
