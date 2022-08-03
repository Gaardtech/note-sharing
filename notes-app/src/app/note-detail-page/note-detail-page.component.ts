import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../types';
@Component({
  selector: 'app-note-detail-page',
  templateUrl: './note-detail-page.component.html',
  styleUrls: ['./note-detail-page.component.css']
})
export class NoteDetailPageComponent implements OnInit {
  note: Note | undefined;
  isLoading: boolean = false;
  isEditing: boolean = false;
  updatedContent: string = " ";
  updatedTitle: string = " ";
  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,

  ) {
    
   }

  ngOnInit(): void {
    const noteID = this.route.snapshot.paramMap.get('noteID');
    if (!noteID) {return; }
    console.log(this.isLoading)
    
    this.notesService.getNoteById(noteID).subscribe(note => {
      this.note = note;
      console.log(this.note)
      this.isLoading = false;
      
      
      if (note){
        this.updatedContent = note.content
        this.updatedTitle = note.title
      }
    })
  }

  editClicked() {
    this.isEditing = true;

  }

  saveClicked(){
    if (this.note){
      this.notesService.updateNote(this.note.id,this.updatedTitle,this.updatedContent)
      this.isEditing = false
    }

  }

  cancelClicked(){
    this.isEditing = false;
    if (this.note){
      this.updatedContent = this.note.content
      this.updatedTitle = this.note.title
    }

  }

}
