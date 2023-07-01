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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/core/store/user/user.effects';

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
    MatAutocompleteModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [UserFormComponent],
})
export class UserFormModule {}
