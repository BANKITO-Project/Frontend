import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientModule]

  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });
});
