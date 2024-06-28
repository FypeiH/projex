import { TestBed } from '@angular/core/testing';
import { AuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthenticationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
