import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBtnComponent } from './contact-btn.component';

describe('ContactBtnComponent', () => {
  let component: ContactBtnComponent;
  let fixture: ComponentFixture<ContactBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBtnComponent]
    });
    fixture = TestBed.createComponent(ContactBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
