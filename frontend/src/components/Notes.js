import React, { useContext, useEffect } from 'react'
import NoteContext from '../contexts/Note/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {

  const { notes ,getNotes } = useContext(NoteContext)

  useEffect(()=>{
    getNotes()
  }, [])
 
  return (


    <div className='row my-4'>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  )
}

export default Notes