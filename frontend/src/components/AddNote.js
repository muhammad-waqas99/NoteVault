import React, { useContext, useState } from 'react';
import NoteContext from '../contexts/Note/NoteContext';
import '../css/AddNote.css';
import AlertContext from '../contexts/Alert/AlertContext';

const AddNote = () => {
  const allTags = [
    "Personal", "Work", "Study", "Ideas", "Important",
    "Shopping", "Health", "Finance", "Travel", "Projects"
  ];

  const { showAlert } = useContext(AlertContext);
  const [selectedTags, setselectedTags] = useState([]);
  const { addNote } = useContext(NoteContext);
  const [note, setnote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    addNote(
      note.title,
      note.description,
      selectedTags.length === 0 ? ["Personal"] : selectedTags
    );

    showAlert("Note Added Successfully ", "success");

    setnote({
      title: "",
      description: "",
    });

    setselectedTags([]);
  };

  const handleCheckChange = (e) => {
    const value = e.target.value;

    if (selectedTags.includes(value)) {
      setselectedTags(selectedTags.filter(tag => tag !== value));
    } else {
      setselectedTags([...selectedTags, value]);
    }
  };

  return (
    <div className="nv-add-note-wrapper">
      <div className="nv-add-note-card">
        <h2 className="nv-add-note-title">Add New Note</h2>

        <form>



          <div className="nv-form-group">
  <label htmlFor="title" className="nv-form-label">
    Title 
    <span className="nv-input-hint">(min 3 chars)</span>
  </label>
  <input
                type="text"
              className="nv-input"
              id="title"
              name="title"
              onChange={handleChange}
              required
              minLength={5}
              value={note.title}
  />


  <div className="nv-form-group">
  <label htmlFor="description" className="nv-form-label">
    Description 
    <span className="nv-input-hint">(min 6 chars)</span>
  </label>
  <textarea
              className="nv-textarea"
              id="description"
              rows="4"
              name="description"
              onChange={handleChange}
              required
              minLength={5}
              value={note.description}
  />
</div>
</div>


          <div className="nv-form-group">
            <label className="nv-form-label">
              Tags
              <span className="nv-tag-limit">
                ({selectedTags.length}/3)
              </span>
            </label>

            <div className="nv-tags-grid">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`nv-tag-chip ${selectedTags.includes(tag) ? "active" : ""}`}
                  onClick={() => {
                    if (selectedTags.length === 3 && !selectedTags.includes(tag)) {
                      showAlert("Only 3 tags are allowed", "danger");
                      return;
                    }
                    handleCheckChange({
                      target: { value: tag }
                    });
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={note.title.length < 3 || note.description.length < 6}
            type="submit"
            className="nv-btn-add"
            onClick={handleClick}
          >
            <i className="fa-solid fa-plus" style={{ marginRight: '8px' }}></i>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;