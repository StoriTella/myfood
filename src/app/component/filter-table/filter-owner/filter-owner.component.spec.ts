import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOwnerComponent } from './filter-owner.component';

describe('FilterOwnerComponent', () => {
  let component: FilterOwnerComponent;
  let fixture: ComponentFixture<FilterOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
