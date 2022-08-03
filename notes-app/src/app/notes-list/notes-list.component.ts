import { outputAst } from '@angular/compiler';
import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import {Note} from '../types'
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input() notes!: Note[];

  @Output() selectNote = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  getWordCount(str: string): number {
    return str.split(' ').length;
  }

}
