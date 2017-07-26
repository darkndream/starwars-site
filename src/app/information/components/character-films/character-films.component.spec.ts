import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilmsComponent } from './character-films.component';

describe('CharacterFilmsComponent', () => {
  let component: CharacterFilmsComponent;
  let fixture: ComponentFixture<CharacterFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
