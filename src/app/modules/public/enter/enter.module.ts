import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterComponent } from './enter.component';
import { RouterModule } from '@angular/router';
import { enterRoutes } from './enter.routes';

@NgModule({
  declarations: [EnterComponent],
  imports: [CommonModule, RouterModule.forChild(enterRoutes)],
})
export class EnterModule {}
