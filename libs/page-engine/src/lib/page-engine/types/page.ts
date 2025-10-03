import { Type } from '@angular/core';

export type Page = {
  title: string;
  component: Type<any>;
  children?: Page[];
  data?: { [key: string]: any };
};
