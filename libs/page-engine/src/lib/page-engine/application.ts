import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, Type } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { Page } from './types/page';
import { HEADER_COMPONENT } from './tokens';
import { RootComponent } from './ui-components/root.component';
import { HeaderComponent } from './ui-components/header.component';
import { PageComponent } from './ui-components/pages/page.component';
import { TextPageComponent } from './ui-components/pages/text-page.component';
import { HtmlPageComponent } from './ui-components/pages/html-page.component';

export function application<THeader extends HeaderComponent>(
  header?: Type<THeader>,
  ...pages: Page[]
): Promise<ApplicationRef> {
  return bootstrapApplication(RootComponent, {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(createRoutes(pages)),
      {
        provide: HEADER_COMPONENT,
        useValue: header,
      },
    ],
  });
}

export function page(title: string, component: Type<any> = PageComponent): Page {
  return {
    title,
    component,
  };
}

export function textPage(title: string, text?: string): Page {
  return {
    title,
    component: TextPageComponent,
    data: {
      text: text ?? `This is the ${title} page.`,
    },
  };
}

export function htmlPage(title: string, html: string): Page {
  return {
    title,
    component: HtmlPageComponent,
    data: {
      html,
    },
  };
}

function createRoutes(pages: Page[]): Routes {
  const pageNavigationEntries = pages.map((page) => ({
    path: toKebabCase(page.title),
    title: page.title,
    component: page.component,
    data: { title: page.title, ...page.data },
  }));
  return [
    ...pageNavigationEntries,
    {
      path: '**',
      redirectTo: pageNavigationEntries.length ? pageNavigationEntries[0].path : '',
    },
  ];
}

function toKebabCase(text: string) {
  return text
    .replace(/[^\w\s]/gi, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}
