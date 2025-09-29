import { InjectionToken, Type } from '@angular/core';
import { HeaderComponent } from './application';

export const HEADER_COMPONENT = new InjectionToken<Type<HeaderComponent>>('HEADER_COMPONENT');
