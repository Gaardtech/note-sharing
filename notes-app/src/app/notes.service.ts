import {Note} from './types';
import {v4 as uuid} from 'uuid';
import {fakeNotes, fakeNotesShared} from './fake-data';
import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Observable ,Subject, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  notesSubject = new Subject<Note[]>();
  _notes: Note[] = fakeNotes;
  get notes(){
    return this._notes;
  } 
  
  set Notes(newValue: Note[]){
    this._notes = newValue;
    this.notesSubject.next(newValue); 
  }
  
  sharedNotesSubject = new Subject<Note[]>(); 
  _sharedNotes: Note[] = fakeNotesShared;
  get SharedNotes(){
    return this._sharedNotes;
  } 

  set sharedNotes(newValue: Note[] ){
    this._sharedNotes = newValue;
    this.sharedNotesSubject.next(newValue);
  }



  constructor() { }

  getNotes(): Note[]{
    return this._notes;
  } 

  getSharedNotes(): Note[]{
    return this._sharedNotes;
  } 

  getNoteById(noteId: string): Observable <Note | undefined> {
    return new Observable<Note | undefined>(observer => {
       observer.next([...this.notes, ...this.sharedNotes].find(note => note.id === noteId));
      
       this.notesSubject.subscribe({
        next: updatedNotes => observer.next([...updatedNotes, ...this.sharedNotes].find(note => note.id === noteId)),   
       })
       this.sharedNotesSubject.subscribe({
        next: updatedSharedNotes => observer.next([...this.Notes, ...updatedSharedNotes ].find(note => note.id === noteId)),
       })

    })
  } 

  createNote(title: string){
    const newNote = {
      id: uuid(), 
      title,
      content: '' 
    }

    this.notes.push(newNote);

  }

  deleteNote(noteID: string){
    this._notes = this.notes.filter(note => note.id !== noteID);
     
  }

  updateNote(noteID: string, newTitle: string, newContent: string){
    this._notes = this.notes.map(note => {
      if (note.id === noteID)
      {
        return {...note, title: newTitle, content: newContent }
        
      }

      return note;
    });

  }

}
