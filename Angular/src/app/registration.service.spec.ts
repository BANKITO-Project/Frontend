import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientModule]
  }));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
