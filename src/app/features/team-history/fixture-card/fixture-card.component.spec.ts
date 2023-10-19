import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureCardComponent } from './fixture-card.component';

describe('FixtureCardComponent', () => {
  let component: FixtureCardComponent;
  let fixture: ComponentFixture<FixtureCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FixtureCardComponent]
    });
    fixture = TestBed.createComponent(FixtureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
