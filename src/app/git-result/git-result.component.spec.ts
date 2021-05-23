import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitResultComponent } from './git-result.component';

describe('GitResultComponent', () => {
  let component: GitResultComponent;
  let fixture: ComponentFixture<GitResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
