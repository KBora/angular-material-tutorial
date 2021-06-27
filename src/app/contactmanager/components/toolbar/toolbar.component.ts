import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isScreenSmall = false;
  
  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
