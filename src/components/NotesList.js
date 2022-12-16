import React, {useContext} from 'react';
import { notesContext } from '../contexts/NotesContext';
import Note from './Note';


const NotesList = () => {
    const {notes} = useContext(notesContext);
    const message = notes.length ? null : <p>List is Empty!</p>;
  return (
    <ul>
        {
          message ||
          notes.map(note => <Note note={note} key={note.id} />)
          }
    </ul>
  )
}

export default NotesList