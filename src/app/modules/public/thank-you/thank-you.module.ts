import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you.component';
import { RouterModule } from '@angular/router';
import { thankYouRoutes } from './thank-you.routes';
import { ThankYouComponentModule } from '../../user/components/thank-you/thank-you.module';

@NgModule({
  declarations: [ThankYouComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(thankYouRoutes),
    ThankYouComponentModule,
  ],
})
export class ThankYouModule {}
