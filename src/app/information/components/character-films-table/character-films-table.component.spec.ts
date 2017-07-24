import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilmsTableComponent } from './character-films-table.component';

describe('CharacterFilmsTableComponent', () => {
  let component: CharacterFilmsTableComponent;
  let fixture: ComponentFixture<CharacterFilmsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFilmsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
