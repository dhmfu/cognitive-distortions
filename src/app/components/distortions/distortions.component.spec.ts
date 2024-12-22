import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistortionsComponent } from './distortions.component';

describe('DistortionsComponent', () => {
  let component: DistortionsComponent;
  let fixture: ComponentFixture<DistortionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistortionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistortionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
