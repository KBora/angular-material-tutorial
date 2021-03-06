import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ]
  user!: User;

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService
  ) { }

  userName = new FormControl('', [Validators.required,]);

  getErrorMessage() {
    return this.userName.hasError("required") ? 'Please enter a name' : '';
  }

  ngOnInit(): void {
    this.user = { name: '', id: 0, birthDate: new Date(), bio: '', avatar: '', notes: [] };
  }

  save() {
    this.user.name = this.userName.value;
    this.userService.addUser(this.user).then(user => {
      
      this.dialogRef.close(user);
    })
    
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
