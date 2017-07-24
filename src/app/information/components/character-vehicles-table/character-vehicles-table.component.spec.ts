import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterVehiclesTableComponent } from './character-vehicles-table.component';

describe('CharacterVehiclesTableComponent', () => {
  let component: CharacterVehiclesTableComponent;
  let fixture: ComponentFixture<CharacterVehiclesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterVehiclesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterVehiclesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
