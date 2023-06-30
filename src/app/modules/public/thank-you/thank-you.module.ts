import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you.component';
import { RouterModule } from '@angular/router';
import { thankYouRoutes } from './thank-you.routes';

@NgModule({
  declarations: [ThankYouComponent],
  imports: [CommonModule, RouterModule.forChild(thankYouRoutes)],
})
export class ThankYouModule {}
