import { InjectionToken, Type } from '@angular/core';
import { HeaderComponent } from './ui-components/header.component';

export const HEADER_COMPONENT = new InjectionToken<Type<HeaderComponent>>('HEADER_COMPONENT');
