import { Type } from '@angular/core';

export type Page = {
  title: string;
  component: Type<any>;
  data?: { [key: string]: any };
};
