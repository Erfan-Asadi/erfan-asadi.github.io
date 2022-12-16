import React, {createContext, useState} from 'react';

const initialNotes = [
    {
        title: 'first note',
        id: 1,
        isSelected: false
    },
    {
        title: 'second note',
        id: 3,
        isSelected: true
    },
    {
        title: 'Persian Cats',
        id: 2,
        isSelected: false
    },
    {
        title: 'American boys',
        id: 4,
        isSelected: false
    },
  ]
export const notesContext = createContext(initialNotes);

const NotesProvider = (props) => {
    const [notes, setNotes] = useState(initialNotes);

  return (
    <notesContext.Provider value={{notes, setNotes}}>
        {props.children}
    </notesContext.Provider>
  )
}

export default NotesProvider