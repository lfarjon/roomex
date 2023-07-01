import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterComponent } from './enter.component';
import { RouterModule } from '@angular/router';
import { enterRoutes } from './enter.routes';
import { EnterFormModule } from '../../user/components/enter/enter.module';

@NgModule({
  declarations: [EnterComponent],
  imports: [CommonModule, RouterModule.forChild(enterRoutes), EnterFormModule],
})
export class EnterModule {}
