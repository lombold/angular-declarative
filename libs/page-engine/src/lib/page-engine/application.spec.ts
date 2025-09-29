import { application, HeaderComponent, page } from './application';
import { beforeEach, expect } from 'vitest';
import { DebugElement, destroyPlatform } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

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
    const app = await application(HeaderComponent, page('Home'));

    expect(debugElement.nativeElement.innerHTML).toContain('Home');
    app.destroy();
  });

  it('should create with two pages', async () => {
    const app = await application(HeaderComponent, page('Home'), page('About'));

    await app.injector.get(Router).navigate(['about']);
    app.tick();

    expect(debugElement.nativeElement.innerHTML).toContain('About');
    app.destroy();
  });

  it('should display the header', async () => {
    const app = await application(HeaderComponent);

    expect(debugElement.query(By.css('header'))).toBeTruthy();
    app.destroy();
  });
});
