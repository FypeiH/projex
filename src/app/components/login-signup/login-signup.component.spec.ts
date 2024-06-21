import { TestBed } from '@angular/core/testing';
import { LoginSignUpComponent } from './login-signup.component';

describe('LoginSignUpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignUpComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginSignUpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
