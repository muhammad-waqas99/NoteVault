import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/Note/NoteContext';
import '../css/AddNote.css'
import AlertContext from '../contexts/Alert/AlertContext';

const AddNote = () => {

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
  "Projects"
];

    const{showAlert} =useContext(AlertContext)

const [selectedTags , setselectedTags] =useState([])
    
      const { addNote } = useContext(NoteContext) ;

      const [note , setnote] = useState({title : "", description : "" } )

      const handleChange =(e)=>{
         setnote({...note, [e.target.name]  : e.target.value })
      }
   const handleClick = (e) => {
    e.preventDefault();

    addNote(
        note.title,
        note.description,
       selectedTags.length === 0 ? ["Personal"] : selectedTags
    );

    showAlert("Note Added Successfully " , "success")

    setnote({
        title: "",
        description: "",
       
    });

    setselectedTags([])
};






const handleCheckChange = (e) => {

    const value = e.target.value;

    if (selectedTags.includes(value)) {

        setselectedTags(
            selectedTags.filter(tag => tag !== value)
        );

    } else {

        setselectedTags([
            ...selectedTags,
            value
        ]);

    }

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
              



<div className="mb-4">
    <label className="form-label">
        Tags
        <span className="tag-limit">
            ({selectedTags.length}/3)
        </span>
    </label>

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
                        value: tag
                    }
                });

            }}
        >
            {tag}
        </button>

    ))}

</div>

</div>


               
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
  );
}
export default AddNote