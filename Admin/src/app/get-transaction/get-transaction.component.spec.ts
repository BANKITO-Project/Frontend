import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';

import { GetTransactionComponent } from './get-transaction.component';

describe('GetTransactionComponent', () => {
  let component: GetTransactionComponent;
  let fixture: ComponentFixture<GetTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTransactionComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[AdminService,AlertifyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
