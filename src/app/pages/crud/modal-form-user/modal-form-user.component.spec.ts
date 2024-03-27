import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormUserComponent } from './modal-form-user.component';

describe('ModalFormUserComponent', () => {
  let component: ModalFormUserComponent;
  let fixture: ComponentFixture<ModalFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFormUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
