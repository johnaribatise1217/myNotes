import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText , setNoteText] = useState('')
  const noteLimit = 200

  const handleChange = (e) =>{
    if (noteLimit - e.target.value.length >= 0){
        setNoteText(e.target.value)
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText('')
    }
  }

  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Write your note here...' value={noteText} onChange={handleChange}>
      </textarea>
      <div className="note-footer">
        <small>{noteLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
