import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { NoteDetailPageComponent } from './note-detail-page/note-detail-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteNoteFoundPageComponent } from './note-note-found-page/note-note-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesPageComponent,
    NoteDetailPageComponent,
    NotFoundPageComponent,
    NotesListComponent,
    NoteNoteFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
