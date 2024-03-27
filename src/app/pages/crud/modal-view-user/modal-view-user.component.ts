import { Component, Inject } from '@angular/core';
import { User } from '../../../interfaces/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view-user',
  templateUrl: './modal-view-user.component.html',
  styleUrl: './modal-view-user.component.scss'
})
export class ModalViewUserComponent {

  userData: User;

  constructor(
    public dialogRef: MatDialogRef<ModalViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userData = data;
  }

  closeModal() { this.dialogRef.close(); }

}
