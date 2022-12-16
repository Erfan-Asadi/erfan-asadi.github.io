import React, { useState, useContext } from 'react'
import { notesContext } from '../contexts/NotesContext';

const Form = () => {
    const [noteValue, setNoteValue] = useState('');
    const {setNotes, notes} = useContext(notesContext);

    function submitHandler(e) {
        e.preventDefault();
        setNotes([
                ...notes, {
                    title: noteValue,
                    id: Math.floor(Math.random() * 1000 ), 
                    isSelected: false
                }
            ])
    }
    function changeHandler(e) {
        setNoteValue(e.target.value)
    }

    function removeSelectedNotes() {
        const unselectedNotes = notes.filter(note => !note.isSelected);
        setNotes(unselectedNotes);
    }


  return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="type something..." value={noteValue}  onChange={changeHandler} />
        <button>Add</button>
        <button type='button' onClick={removeSelectedNotes}>Remove Selected</button>
    </form>
  )
}

export default Form