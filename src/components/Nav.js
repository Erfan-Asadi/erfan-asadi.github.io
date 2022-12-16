import React, {useContext} from 'react';
import { notesContext } from '../contexts/NotesContext';

const styles = {
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'backgroundColor': '#303030',
    'padding': '15px 30px',
    'color': '#fff'
}


const Nav = () => {
  const {notes} = useContext(notesContext);

  return (
    <header style={styles}>
        <h2>Erfan Notes</h2>
        <span>Notes: {notes.length}</span>
    </header>
  )
}

export default Nav