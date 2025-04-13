import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhfazComponent } from './ehfaz.component';

describe('EhfazComponent', () => {
  let component: EhfazComponent;
  let fixture: ComponentFixture<EhfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EhfazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
