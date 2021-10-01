import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertifyService } from '../alertify.service';
import { AppRoutingModule } from '../app-routing.module';
import { TransactionService } from '../transaction.service';
import { TransferComponent } from './transfer.component';


describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[TransactionService,AlertifyService]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});