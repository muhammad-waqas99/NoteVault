import React from "react";
import "../css/NoteItem.css";

const NoteItem = ({ note }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card note-card h-100">
        <div className="card-body d-flex flex-column">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title mb-0">
              {note.title}
            </h5>

            <span className="badge note-tag">
              {note.tag}
            </span>
          </div>

          {/* Description */}
          <p className="card-text flex-grow-1">
            {note.description}
          </p>

          {/* Actions */}
          <div className="note-actions mt-3">
            <i
              className="fa-solid fa-pen-to-square edit-icon"
              title="Edit"
            ></i>

            <i
              className="fa-solid fa-trash delete-icon"
              title="Delete"
            ></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoteItem;