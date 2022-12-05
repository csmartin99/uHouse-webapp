import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedadsComponent } from './savedads.component';

describe('SavedadsComponent', () => {
  let component: SavedadsComponent;
  let fixture: ComponentFixture<SavedadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
