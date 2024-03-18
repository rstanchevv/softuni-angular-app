import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechItemComponent } from './tech-item.component';

describe('TechItemComponent', () => {
  let component: TechItemComponent;
  let fixture: ComponentFixture<TechItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechItemComponent]
    });
    fixture = TestBed.createComponent(TechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
