import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientModule]
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
