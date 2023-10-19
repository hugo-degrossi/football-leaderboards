import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHistoryComponent } from './team-history.component';

describe('TeamHistoryComponent', () => {
  let component: TeamHistoryComponent;
  let fixture: ComponentFixture<TeamHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TeamHistoryComponent]
    });
    fixture = TestBed.createComponent(TeamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
