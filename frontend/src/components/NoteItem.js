import React, { useContext } from "react";
import "../css/NoteItem.css";
import NoteContext from "../contexts/Note/NoteContext";




const NoteItem = ({ note }) => {


  const {deleteNote} = useContext(NoteContext)
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card note-card h-100">
        <div className="card-body d-flex flex-column">

        
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title mb-0">
              {note.title}
            </h5>

            <span className="badge note-tag">
              {note.tag}
            </span>
          </div>

    
          <p className="card-text flex-grow-1">
            {note.description}
          </p>

          
          <div className="note-actions mt-3">
            <i
              className="fa-solid fa-pen-to-square edit-icon"
              title="Edit"
            ></i>



<span
  className="delete-icon"
  onClick={() => {
    console.log("Span Clicked");
    deleteNote(note._id);
  }}
>
  <i className="fa-solid fa-trash"></i>
</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoteItem;