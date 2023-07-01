import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you.component';
import { RouterModule } from '@angular/router';
import { thankYouRoutes } from './thank-you.routes';
import { ShowUserDataModule } from '../../user/components/show-user-data/show-user-data.module';

@NgModule({
  declarations: [ThankYouComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(thankYouRoutes),
    ShowUserDataModule,
  ],
})
export class ThankYouModule {}
