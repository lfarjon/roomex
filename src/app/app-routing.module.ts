import { Route } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'enter', pathMatch: 'full' },
  {
    component: LayoutComponent,
    path: 'enter',
    loadChildren: () =>
      import('./modules/public/enter/enter.module').then((m) => m.EnterModule),
  },
  {
    component: LayoutComponent,
    path: 'thankyou',
    loadChildren: () =>
      import('./modules/public/thank-you/thank-you.module').then(
        (m) => m.ThankYouModule
      ),
  },
];
