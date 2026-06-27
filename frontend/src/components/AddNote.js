import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/Note/NoteContext';
import '../css/AddNote.css'
import AlertContext from '../contexts/Alert/AlertContext';

const AddNote = () => {

    const{showAlert} =useContext(AlertContext)

    
      const { addNote } = useContext(NoteContext) ;

      const [note , setnote] = useState({title : "", description : "" , tag : ""} )

      const handleChange =(e)=>{
         setnote({...note, [e.target.name]  : e.target.value })
      }
   const handleClick = (e) => {
    e.preventDefault();

    addNote(
        note.title,
        note.description,
        note.tag.trim() === "" ? "Personal" : note.tag
    );

    showAlert("Note Added Successfully " , "success")

    setnote({
        title: "",
        description: "",
        tag: ""
    });
};
      
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
                    required
                    minLength={5}
                    value={note.title}
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
                    required
                    minLength={5}
                    value={note.description}
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
                    value={note.tag}
                
                />
            </div>

            <button
                disabled={note.title.length <5  || note.description.length<5 }
                type="submit"
                className="btn add-note-btn"
                onClick={handleClick}
            >
                <i className="fa-solid fa-plus me-2"  disabled={note.title.length <5  || note.description.length<5 }></i>
                Add Note
                     
            </button>

        </form>

    </div>
</>
  )
}

export default AddNote