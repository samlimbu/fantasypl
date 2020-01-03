import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownlistComponent } from './drop-downlist.component';

describe('DropDownlistComponent', () => {
  let component: DropDownlistComponent;
  let fixture: ComponentFixture<DropDownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
