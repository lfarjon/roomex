import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowUserDataComponent } from './show-user-data.component';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';

describe('ShowUserDataComponent', () => {
  let component: ShowUserDataComponent;
  let fixture: ComponentFixture<ShowUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowUserDataComponent],
      imports: [StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserDataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user data correctly', () => {
    const userData = {
      name: 'John Doe',
      username: 'john@doe.com',
      country: 'United Kingdom',
      postcode: 'WC2N 5DU',
      favouriteMovie: 'The Godfather',
    };
    component.userData$ = of(userData);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.name').textContent).toContain('John Doe');
    expect(compiled.querySelector('.username').textContent).toContain(
      'john@doe.com'
    );
    expect(compiled.querySelector('.country').textContent).toContain(
      'United Kingdom'
    );
    expect(compiled.querySelector('.postcode').textContent).toContain(
      'WC2N 5DU'
    );
    expect(compiled.querySelector('.favouriteMovie').textContent).toContain(
      'The Godfather'
    );
  });
});
