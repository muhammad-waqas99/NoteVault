import React, { useContext, useState } from 'react';
import NoteContext from '../contexts/Note/NoteContext';
import '../css/AddNote.css';
import AlertContext from '../contexts/Alert/AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

const AddNote = () => {
  const allTags = [
    "Personal", "Work", "Study", "Ideas", "Important",
    "Shopping", "Health", "Finance", "Travel", "Projects"
  ];

  const { addNote, loading } = useContext(NoteContext);
  const { showAlert } = useContext(AlertContext);
  const [selectedTags, setselectedTags] = useState([]);
  const [note, setnote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    await addNote(
      note.title,
      note.description,
      selectedTags.length === 0 ? ["Personal"] : selectedTags
    );

    showAlert("Note Added Successfully ", "success");

    setnote({ title: "", description: "" });
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
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
              minLength={3}
              value={note.title}
            />
          </div>

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
              minLength={6}
              value={note.description}
            />
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
            disabled={loading || note.title.length < 3 || note.description.length < 6}
            type="submit"
            className="nv-btn-add"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
                Add Note
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;