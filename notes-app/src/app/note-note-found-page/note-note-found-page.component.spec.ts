import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteNoteFoundPageComponent } from './note-note-found-page.component';

describe('NoteNoteFoundPageComponent', () => {
  let component: NoteNoteFoundPageComponent;
  let fixture: ComponentFixture<NoteNoteFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteNoteFoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteNoteFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
