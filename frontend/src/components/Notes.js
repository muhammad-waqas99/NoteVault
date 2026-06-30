import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contexts/Note/NoteContext";
import NoteItem from "./NoteItem";
import "../css/Notes.css";
import AlertContext from "../contexts/Alert/AlertContext";

const Notes = () => {
  const allTags = [
    "Personal",
    "Work",
    "Study",
    "Ideas",
    "Important",
    "Shopping",
    "Health",
    "Finance",
    "Travel",
    "Projects",
  ];

  const [search, setSearch] = useState(""); 
  const [searchTag, setSearchTag] = useState("");
  const { showAlert } = useContext(AlertContext);
  const [selectedTags, setselectedTags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeTags, setActiveTags] = useState([]);
  const[showDeleteModal , setShowDeleteModal] =useState(false)
  const[selectedNote , setSelectedNote] =useState()

  let { notes, getNotes, editNote, setNotes ,deleteNote} = useContext(NoteContext);



  

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updatenote = (currentnote) => {
    setNote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
    });
    setselectedTags(currentnote.tags || []);
    setShowModal(true);
  };

let sortedNotes =[...notes].sort((a, b) => {
  return (b.isPinned === true) - (a.isPinned === true);
});
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, selectedTags, note.edescription);
    setShowModal(false);
    showAlert("Note Updated Successfully ", "success");
  };

  const searchNotes = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

const filteredNotes = Array.isArray(sortedNotes)
    ? sortedNotes.filter((n) => {
        // Text Search
        const textMatch =
          n.title?.toLowerCase().includes(search.toLowerCase()) ||
          n.description?.toLowerCase().includes(search.toLowerCase());

   
        const tagMatch =
          activeTags.length === 0 || 
          n.tags?.includes(activeTags[0]); 

        return textMatch && tagMatch;
      })
    : [];

  const handleCheckChange = (e) => {
    const value = e.target.value;

    if (selectedTags.includes(value)) {
      setselectedTags(selectedTags.filter((tag) => tag !== value));
    } else {
      setselectedTags([...selectedTags, value]);
    }
  };

  
  const handleSearchTag = (e) => {
    const value = e.target.value;
    setSearchTag(value);
  };

const toggleTag = (tag) => {

    setActiveTags((prev) => 
      prev.includes(tag) ? [] : [tag]
    );
  };



      const handleClickDelete= (note)=>{
    setSelectedNote(note)
      setShowDeleteModal(true)
    }

    const handleConfirmDelete=()=>{
      deleteNote(selectedNote._id)
      setShowDeleteModal(false)
    }

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Search in title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {/* Filter Tags Grid */}
      <div className="tags-grid">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`tag-chip ${
              activeTags.includes(tag) ? "active-tag" : ""
            }`}
            onClick={() => {
             
              toggleTag(tag); 
            }}
          >
            {tag}
          </button>
        ))}
      </div>
<div className="row my-4">
       
        {!Array.isArray(sortedNotes) || sortedNotes.length === 0 ? (
          <h2 className="mt-3">No Notes To Display</h2>
        ) : filteredNotes.length === 0 ? (
    
          <h4 className="text-center mt-4 w-100 text-white">
            <i className="fa-solid fa-magnifying-glass mb-2 d-block fs-3"></i>
            No matching notes found
          </h4>
        ) : (
       
          filteredNotes.map((noteItem) => (
            <NoteItem
              key={noteItem._id}
              note={noteItem}
              updatenote={updatenote}
            handleClickDelete={handleClickDelete}
            />
          ))
        )}
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

              <div className="tags-grid">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`tag-chip ${
                      selectedTags.includes(tag) ? "active-tag" : ""
                    }`}
                    onClick={() => {
                      if (
                        selectedTags.length === 3 &&
                        !selectedTags.includes(tag)
                      ) {
                        showAlert("Only 3 tags are allowed", "danger");
                        return;
                      }

                      handleCheckChange({
                        target: {
                          value: tag,
                        },
                      });
                    }}
                  >
                    {tag}
                  </button>
                ))}
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
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
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




      
{/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="glass-modal-overlay">
          <div className="glass-modal">
            
            <div className="glass-header">
              <h3 className="text-danger">
                <i className="fa-solid fa-trash me-2"></i>
                Confirm Delete
              </h3>
              <button
                className="close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="glass-body text-center py-4">
              <i className="fa-solid fa-circle-exclamation text-warning mb-3" style={{fontSize: "3rem"}}></i>
              <h5 className="mb-2">Are you sure?</h5>
              <p className="text-white">
                Do you really want to delete this note? This process cannot be undone.
              </p>
            </div>

            <div className="glass-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger px-4"
                style={{borderRadius: "8px"}}
                onClick={handleConfirmDelete}
              >
                <i className="fa-solid fa-trash-can me-2"></i>
                Yes, Delete
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Notes;