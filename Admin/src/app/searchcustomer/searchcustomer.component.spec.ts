import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';

import { SearchcustomerComponent } from './searchcustomer.component';

describe('SearchcustomerComponent', () => {
  let component: SearchcustomerComponent;
  let fixture: ComponentFixture<SearchcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcustomerComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[AdminService,AlertifyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
