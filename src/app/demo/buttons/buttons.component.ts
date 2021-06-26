import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <h1>hello</h1>
    <button mat-flat-button color="primary">Primary</button>
    <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
      <mat-icon>bookmark</mat-icon>
    </button>
    <mat-checkbox>Check me</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
