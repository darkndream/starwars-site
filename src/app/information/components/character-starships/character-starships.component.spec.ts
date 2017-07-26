import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStarshipsComponent } from './character-starships.component';

describe('CharacterStarshipsComponent', () => {
  let component: CharacterStarshipsComponent;
  let fixture: ComponentFixture<CharacterStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
