import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes!: Note[];

  displayedColumns: string[] = ['id',  'title', 'date' ];
  dataSource!: MatTableDataSource<Note>;

  constructor() { 
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

}
