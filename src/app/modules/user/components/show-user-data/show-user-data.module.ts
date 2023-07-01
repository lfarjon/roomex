import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/core/store/user/user.effects';
import { ShowUserDataComponent } from './show-user-data.component';

@NgModule({
  declarations: [ShowUserDataComponent],
  imports: [CommonModule, EffectsModule.forFeature([UserEffects])],
  exports: [ShowUserDataComponent],
})
export class ShowUserDataModule {}
