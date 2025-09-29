import { application, HeaderComponent, htmlPage, page, textPage } from '@lombold/angular-page-engine';

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
  )
).catch((reason) => console.log(reason));
