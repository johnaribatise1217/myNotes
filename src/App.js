import { useEffect, useState } from 'react';
import NotesList from './Components/NotesList';
import {v4 as uuidv4} from 'uuid'
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  const [notes , setNotes] = useState([])
  const [darkMode , setDarkMode] = useState(false)

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: uuidv4(),
      text : text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes , newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const searchForText = (searchNote) => {
    const filterNote = notes.filter((note) => note.text.toLowerCase().includes(searchNote))
    setNotes(filterNote)
  }

  useEffect(() =>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app', JSON.stringify(notes))
  }, [notes])

  return (
    <div className={`${darkMode && 'dark-mode'} `}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={searchForText}/>
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}

export default App;