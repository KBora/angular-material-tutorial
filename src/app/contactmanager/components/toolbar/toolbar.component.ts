import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isScreenSmall = false;
  
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private router: Router) { }

  userIdToRedirectTo = 1;

  ngOnInit(): void {
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, { 
      width: '450px'
     });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.userIdToRedirectTo = result.id;
        let snackBarRef = this.openSnackBar('User created', 'Open user');

        snackBarRef.onAction().subscribe(() => {          
          this.router.navigate(['/contactmanager', this.userIdToRedirectTo ]);
          console.log('hello');
          snackBarRef.dismiss();
        });
        
       }
    });
  }
  
  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action);    
  }


}
