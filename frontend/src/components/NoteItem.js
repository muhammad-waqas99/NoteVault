import React, { useContext } from "react";
import "../css/NoteItem.css";
import NoteContext from "../contexts/Note/NoteContext";
import AlertContext from "../contexts/Alert/AlertContext";




const NoteItem = ({ note , updatenote}) => {
    const{showAlert} =useContext(AlertContext)

  const {deleteNote,togglePin} = useContext(NoteContext)
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card note-card h-100">
        <div className="card-body d-flex flex-column">

        
<div className="d-flex justify-content-between align-items-start mb-3">

    <h5 className="card-title mb-0">
        {note.title}
    </h5>

    <div className="tags-container">

        {note.tags && note.tags.map((tag, index) => (

            <span key={index} className="badge note-tag">
                {tag}
            </span>

        ))}

    </div>

</div>

    
          <p className="card-text flex-grow-1">
            {note.description}
          </p>


          <span className="pin-icon" onClick={() => togglePin(note._id)}>
 <span
    className={`pin-icon  ${
      note.isPinned ? "active-pin" : ""
    }`}
  onClick={(e) => {
    e.stopPropagation(); // important if card clickable hai
    togglePin(note._id);
    console.log("pin click", note._id);
  }}
  
>
  <i
    className={`fa-solid fa-thumbtack`}
  />
</span>
</span>

          
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