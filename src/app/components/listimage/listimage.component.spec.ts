import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListimageComponent } from './listimage.component';

describe('ListimageComponent', () => {
  let component: ListimageComponent;
  let fixture: ComponentFixture<ListimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
