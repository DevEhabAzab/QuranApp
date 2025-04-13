import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranPageComponent } from './quran-page.component';

describe('QuranPageComponent', () => {
  let component: QuranPageComponent;
  let fixture: ComponentFixture<QuranPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuranPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuranPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
