import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranformationsComponent } from './tranformations.component';

describe('TranformationsComponent', () => {
  let component: TranformationsComponent;
  let fixture: ComponentFixture<TranformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
