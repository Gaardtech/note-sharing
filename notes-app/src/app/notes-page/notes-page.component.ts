import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import {Note} from '../types'
@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {
  notes: Note[] = [];
  sharedNotes: Note[] = [];
  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.sharedNotes = this.notesService.getSharedNotes();
  }

 

  notesSelected(noteID: string) {
      this.router.navigateByUrl(`/notes/${noteID}`)
  }

}
