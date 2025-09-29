import { application, HeaderComponent, page } from '@lombold/angular-page-engine';

application(HeaderComponent, page('Home'), page('About')).catch((reason) => console.log(reason));
