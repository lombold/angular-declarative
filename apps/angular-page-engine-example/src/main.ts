import { application, HeaderComponent, htmlPage, page, subPage, textPage } from '@lombold/angular-page-engine';
import { CustomComponent } from './ui-components/custom-component';

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
    `,
  ),
  htmlPage(
    'Where to find us (html)',
    `
    <address>
      <strong>Any Company</strong><br />
      123 Main St.<br />
      Anytown, USA<br />
    </address>
  `,
  ),
  page('Custom Component', CustomComponent),
  subPage('Component with children', [
    htmlPage('Child 1', '<p>Wichtige Seite</p>'),
    htmlPage('Child 2', '<a href="https://example.com">Example Link</a>'),
  ]),
).catch((reason) => console.log(reason));
