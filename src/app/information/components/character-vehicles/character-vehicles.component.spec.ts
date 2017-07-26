import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterVehiclesComponent } from './character-vehicles.component';

describe('CharacterVehiclesComponent', () => {
  let component: CharacterVehiclesComponent;
  let fixture: ComponentFixture<CharacterVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
