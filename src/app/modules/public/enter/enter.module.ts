import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterComponent } from './enter.component';
import { RouterModule } from '@angular/router';
import { enterRoutes } from './enter.routes';
import { UserFormModule } from '../../user/components/user-form/user-form.module';

@NgModule({
  declarations: [EnterComponent],
  imports: [CommonModule, RouterModule.forChild(enterRoutes), UserFormModule],
})
export class EnterModule {}
