import React from 'react'
import Form from './components/Form';
import Nav from './components/Nav'
import NotesList from './components/NotesList'
import NotesProvider from './contexts/NotesContext';




const App = () => {
  return (
    <div>
      <NotesProvider>
          <Nav />
          <Form />
          <NotesList />
      </NotesProvider>
    </div>
  )
}

export default App