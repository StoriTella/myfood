import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStorageComponent } from './filter-storage.component';

describe('FilterStorageComponent', () => {
  let component: FilterStorageComponent;
  let fixture: ComponentFixture<FilterStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
