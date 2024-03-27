import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewUserComponent } from './modal-view-user.component';

describe('ModalViewUserComponent', () => {
  let component: ModalViewUserComponent;
  let fixture: ComponentFixture<ModalViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
