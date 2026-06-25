import React, { useContext } from 'react'
import NoteContext from '../contexts/Note/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {

  const { Notes } = useContext(NoteContext)

  return (
    <div className='row my-4'>
      {Notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  )
}

export default Notes