import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStarshipsTableComponent } from './character-starships-table.component';

describe('CharacterStarshipsTableComponent', () => {
  let component: CharacterStarshipsTableComponent;
  let fixture: ComponentFixture<CharacterStarshipsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterStarshipsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStarshipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
