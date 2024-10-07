import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocComponent } from './autoc.component';

describe('AutocComponent', () => {
  let component: AutocComponent;
  let fixture: ComponentFixture<AutocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
