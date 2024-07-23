import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategaryComponent } from './categary.component';

describe('CategaryComponent', () => {
  let component: CategaryComponent;
  let fixture: ComponentFixture<CategaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategaryComponent]
    });
    fixture = TestBed.createComponent(CategaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
