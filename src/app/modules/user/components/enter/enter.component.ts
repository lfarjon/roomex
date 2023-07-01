import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-enter-form',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  @Input() classes!: string;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
      username: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      postcode: [''],
      favouriteMovie: [''],
    });

    this.formControl('postcode')?.setValidators(this.postcodeValidators());
    this.formControl('country')?.valueChanges.subscribe(() => {
      this.formControl('postcode')?.updateValueAndValidity();
    });
  }

  ngOnInit() {}

  get formControl(): (control: string) => AbstractControl | null {
    return (control: string): AbstractControl | null =>
      this.userForm.get(control);
  }

  postcodeValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.formControl('country')?.value === 'United Kingdom') {
        const validUKPostcode = new RegExp(
          '^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$'
        );
        return validUKPostcode.test(control.value)
          ? null
          : { invalidPostcode: true };
      } else {
        const validIrelandPostcode = new RegExp('^.{6,10}$');
        return validIrelandPostcode.test(control.value) || !control.value
          ? null
          : { invalidPostcode: true };
      }
    };
  }

  getPostCodePattern(): string | RegExp {
    return '^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$';
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.submitUserData(this.userForm.value);
      this.router.navigate(['/thankyou']);
    } else {
      ['name', 'username', 'country', 'postcode', 'favouriteMovie'].forEach(
        (controlName) => {
          const control = this.userForm.get(controlName);
          control?.markAsTouched();
          control?.updateValueAndValidity();
        }
      );
    }
  }
}
