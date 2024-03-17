import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProItemComponent } from './exp-pro-item.component';

describe('ExpProItemComponent', () => {
  let component: ExpProItemComponent;
  let fixture: ComponentFixture<ExpProItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpProItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpProItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
