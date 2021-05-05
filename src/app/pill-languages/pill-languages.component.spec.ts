import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillLanguagesComponent } from './pill-languages.component';

describe('PillLanguagesComponent', () => {
  let component: PillLanguagesComponent;
  let fixture: ComponentFixture<PillLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
