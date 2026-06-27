import React, { useContext } from "react";
import "../css/NoteItem.css";
import NoteContext from "../contexts/Note/NoteContext";
import AlertContext from "../contexts/Alert/AlertContext";




const NoteItem = ({ note , updatenote}) => {
    const{showAlert} =useContext(AlertContext)

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

            <span className="edit-icon"  onClick={()=>{
              updatenote(note)
              
            }}>

            <i
              className="fa-solid fa-pen-to-square "
              title="Edit"
            ></i>
            </span>
          



<span
  className="delete-icon"
  onClick={() => {
     
    deleteNote(note._id);
    showAlert("Note Deleted " , "success")
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