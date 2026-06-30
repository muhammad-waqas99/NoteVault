import React, { useContext } from "react";
import "../css/NoteItem.css";
import NoteContext from "../contexts/Note/NoteContext";
import AlertContext from "../contexts/Alert/AlertContext";

const NoteItem = ({ note, updatenote, handleClickDelete }) => {
  const { showAlert } = useContext(AlertContext);
  const { togglePin } = useContext(NoteContext);

  return (
    <div className={`nv-note-card ${note.isPinned ? "is-pinned" : ""}`}>
      <div className="nv-note-header">
        <h5 className="nv-note-title">{note.title}</h5>
        <div className="nv-note-tags">
          {note.tags && note.tags.map((tag, index) => (
            <span key={index} className="nv-note-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="nv-note-desc">
        {note.description}
      </p>

      <div className="nv-note-footer">
<button
    className={`nv-icon-btn nv-pin-btn ${note.isPinned ? "active" : ""}`}
    onClick={(e) => {
      e.stopPropagation();
      togglePin(note._id);
    }}
  >
    <i className="fa-solid fa-thumbtack"></i>
  </button>

        <div className="nv-note-actions">
          <button
            className="nv-icon-btn nv-edit-btn"
            onClick={() => updatenote(note)}
            title="Edit"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>

          <button
            className="nv-icon-btn nv-delete-btn"
            onClick={() => handleClickDelete(note)}
            title="Delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;