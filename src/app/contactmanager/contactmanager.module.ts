import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

const routes: Routes = [
  { 
    path: '', 
    component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { 
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-AU' },
  ]
})
export class ContactmanagerModule { }
