import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/Note/NoteContext';
import '../css/AddNote.css'

const AddNote = () => {

    
      const { addNote } = useContext(NoteContext) ;

      const [note , setnote] = useState({title : " ", description : " " , tag : " "} )

      const handleChange =(e)=>{
         setnote({...note, [e.target.name]  : e.target.value })
      }
      const handleClick  =(e)=>{
          e.preventDefault();
            addNote(note.title,note.description,note.tag)
      }
      
  return (
  <>
    <div className="add-note-card">

        <h2 className="mb-4">Add New Note</h2>

        <form>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>

                <input
                    type="text"
                    className="form-control glass-input"
                    id="title"
                    name="title"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>

                <textarea
                    className="form-control glass-input"
                    id="description"
                    rows="4"
                    name="description"
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="tag" className="form-label">Tag</label>

                <input
                    type="text"
                    className="form-control glass-input"
                    id="tag"
                    name="tag"
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="btn add-note-btn"
                onClick={handleClick}
            >
                <i className="fa-solid fa-plus me-2"></i>
                Add Note
            </button>

        </form>

    </div>
</>
  )
}

export default AddNote