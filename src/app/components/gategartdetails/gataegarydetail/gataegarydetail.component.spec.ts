import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GataegarydetailComponent } from './gataegarydetail.component';

describe('GataegarydetailComponent', () => {
  let component: GataegarydetailComponent;
  let fixture: ComponentFixture<GataegarydetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GataegarydetailComponent]
    });
    fixture = TestBed.createComponent(GataegarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
