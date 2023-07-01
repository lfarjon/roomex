import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/core/store/user/user.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [UserFormComponent],
})
export class UserFormModule {}
