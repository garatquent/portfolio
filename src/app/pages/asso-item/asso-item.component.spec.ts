import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoItemComponent } from './asso-item.component';

describe('AssoItemComponent', () => {
  let component: AssoItemComponent;
  let fixture: ComponentFixture<AssoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
