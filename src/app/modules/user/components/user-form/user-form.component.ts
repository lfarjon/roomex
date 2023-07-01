import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() classes!: string;
  userForm: FormGroup;
  filteredMovies$: Observable<Movie[]>;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private userService: UserService,
    private router: Router
  ) {
    const favouriteMovieControl = this.fb.control('');

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
      username: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      postcode: [''],
      favouriteMovie: favouriteMovieControl,
    });

    this.formControl('postcode')?.setValidators(this.postcodeValidators());
    this.formControl('country')?.valueChanges.subscribe(() => {
      this.formControl('postcode')?.updateValueAndValidity();
    });

    this.filteredMovies$ = favouriteMovieControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap((value) => {
        return this._filterMovies(value);
      })
    );
  }

  ngOnInit() {}

  private _filterMovies(value: string): Observable<Movie[]> {
    if (value.length < 2) {
      return of([]);
    }
    return this.movieService.getSuggestedMovies(value);
  }

  onMovieSelected(event: MatAutocompleteSelectedEvent) {
    this.formControl('favouriteMovie')?.setValue(event.option.value);
  }

  formControl(control: string): AbstractControl | null {
    return this.userForm.get(control);
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
