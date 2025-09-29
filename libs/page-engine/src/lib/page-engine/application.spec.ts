import { application, HeaderComponent, page } from './application';
import { beforeEach, expect } from 'vitest';
import { Component, DebugElement, destroyPlatform } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header',
  template: ` <nav>Mock Navigation</nav> `,
})
class MockHeaderComponent extends HeaderComponent {}

describe('Application', () => {
  let debugElement: DebugElement;

  beforeEach(() => {
    document.body.innerHTML = '<app-root id="app-root" />';
    destroyPlatform();
    debugElement = new DebugElement(document.body.children.namedItem('app-root') as HTMLElement);
  });

  it('should create', async () => {
    const app = await application();

    expect(app).toBeTruthy();
    app.destroy();
  });

  it('should create with one page', async () => {
    const app = await application(MockHeaderComponent, page('Home'));

    expect(debugElement.nativeElement.innerHTML).toContain('Home');
    app.destroy();
  });

  it('should create with two pages', async () => {
    const app = await application(MockHeaderComponent, page('Home'), page('About'));

    await app.injector.get(Router).navigate(['about']);
    app.tick();

    expect(debugElement.nativeElement.innerHTML).toContain('About');
    app.destroy();
  });
});
