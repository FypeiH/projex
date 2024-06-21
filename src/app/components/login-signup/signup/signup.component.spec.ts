import { TestBed } from '@angular/core/testing';
import { SignUpComponent } from './signup.component';

describe('SignUpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
