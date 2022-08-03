import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NoteDetailPageComponent } from './note-detail-page/note-detail-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
  {path: 'notes', component: NotesPageComponent },
  {path: 'notes/:noteID', component: NoteDetailPageComponent},
  {path: '**', component: NotFoundPageComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
