import { application, htmlPage, page, textPage } from './application';
import { beforeEach, expect } from 'vitest';
import { Component, DebugElement, destroyPlatform } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './ui-components/header.component';

@Component({
  selector: 'ad-custom-page',
  template: `<h2>This is a custom page</h2>`,
})
class CustomPageComponent {}

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

    expect(debugElement.query(By.css('ad-header'))).toBeTruthy();
    app.destroy();
  });

  it('should display a component page', async () => {
    const app = await application(HeaderComponent, page('Custom', CustomPageComponent));

    expect(debugElement.nativeElement.innerHTML).toContain('This is a custom page');
    app.destroy();
  });

  it('should display a simple text page', async () => {
    const app = await application(HeaderComponent, textPage('Home', 'Welcome to the Home page!'));

    expect(debugElement.nativeElement.innerHTML).toContain('Welcome to the Home page!');
    app.destroy();
  });

  it('should display a html text page', async () => {
    const app = await application(HeaderComponent, htmlPage('Address', '<address>Anystreet 2 <br> Anytown</address>'));

    expect(debugElement.nativeElement.innerHTML).toContain('<address>Anystreet 2 <br> Anytown</address>');
    app.destroy();
  });
});
