
import { HttpClientModule } from '@angular/common/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { TransactionService } from '../transaction.service';

import { WithdrawlComponent } from './withdrawl.component';

describe('WithdrawlComponent', () => {
  let component: WithdrawlComponent;
  let fixture: ComponentFixture<WithdrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawlComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[TransactionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
