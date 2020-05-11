import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillnagarComponent } from './skillnagar.component';

describe('SkillnagarComponent', () => {
  let component: SkillnagarComponent;
  let fixture: ComponentFixture<SkillnagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillnagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
