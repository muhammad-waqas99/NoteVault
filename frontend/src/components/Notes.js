import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contexts/Note/NoteContext";
import NoteItem from "./NoteItem";
import "../css/Notes.css";

const Notes = () => {

  const { notes, getNotes ,editNote } = useContext(NoteContext);

  const [showModal, setShowModal] = useState(false);

  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "Personal",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updatenote = (currentnote) => {
    setNote({
      id:currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });

    setShowModal(true);
  };

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    
   editNote(

        note.id,

        note.etitle,

        note.etag,

        note.edescription

    );
    setShowModal(false);
  };

  return (
    <>

      <div className="row my-4">

       <h2 className="container">
        {notes.length ===0 &&  "No Notes To Display "}
          </h2>
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            updatenote={updatenote}
          />
        ))}

      </div>

      {showModal && (
        <div className="glass-modal-overlay">

          <div className="glass-modal">

           

            <div className="glass-header">

              <h3>
                <i className="fa-solid fa-pen-to-square me-2"></i>
                Edit Note
              </h3>

              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

            </div>

         

            <div className="glass-body">

              <div className="mb-3">

                <label>Title</label>

                <input
                  type="text"
                  className="form-control glass-input"
                  name="etitle"
                  value={note.etitle}
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label>Description</label>

                <textarea
                  rows="5"
                  className="form-control glass-input"
                  name="edescription"
                  value={note.edescription}
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label>Tag</label>

                <input
                  type="text"
                  className="form-control glass-input"
                  name="etag"
                  value={note.etag}
                  onChange={handleChange}
                />

              </div>

            </div>

         

            <div className="glass-footer">

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                disabled={note.etitle.length <5  || note.edescription.length<5 }
                className="save-btn"
                onClick={handleClick}
              >
                <i className="fa-solid fa-floppy-disk me-2"></i>

                Save
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default Notes;