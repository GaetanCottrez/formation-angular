import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcComponent } from './prc.component';

describe('PrcComponent', () => {
  let component: PrcComponent;
  let fixture: ComponentFixture<PrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrcComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
