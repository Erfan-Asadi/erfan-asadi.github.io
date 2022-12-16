import React, {useContext} from 'react';
import { notesContext } from '../contexts/NotesContext';

const Note = ({note}) => {
  const {notes, setNotes} = useContext(notesContext);

  function removeNote() {
    const updatedNotes = notes.filter(noteItem => noteItem.id !== note.id);
    setNotes(updatedNotes);
  }
  function toggleSelection() {
    const newNotes = notes.map(noteItem => {
      if(noteItem.id === note.id) {
        return {
          ...noteItem,
          isSelected: !noteItem.isSelected
        }
      } else {
        return noteItem
      }
    });

    setNotes(newNotes);

  }

  return (
    <li>
      <span onClick={toggleSelection}>
      <input type="checkbox" checked={note.isSelected}/>
      {note.title}
      </span>
      <button onClick={removeNote}>×</button>
    </li>
  )
}

export default Note