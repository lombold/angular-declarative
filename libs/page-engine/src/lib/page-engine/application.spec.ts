import { application, page } from './application';
import { beforeEach, expect } from 'vitest';
import { TestComponentRenderer } from '@angular/core/testing';

describe('Application', () => {
  beforeEach(() => {
    console.log('bla');
    // document.body.innerHTML = '<app-root></app-root>';
    const bla = new TestComponentRenderer();
    bla.insertRootElement('app-root');
    //destroyPlatform();
  });

  it('should create', async () => {
    const app = await application();

    expect(app).toBeTruthy();
    app.destroy();
  });

  it('should create with one page', async () => {
    const app = await application(page('Home'));

    expect(app).toBeTruthy();
    app.destroy();
  });
});
