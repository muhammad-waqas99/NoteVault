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
  "Projects"
];
    const{showAlert} =useContext(AlertContext)


  let { notes, getNotes ,editNote ,setNotes} = useContext(NoteContext);
const [selectedTags,setselectedTags] =useState([])
  const [showModal, setShowModal] = useState(false);


  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
 
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
     
    });
    setselectedTags(currentnote.tags || [])

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

        selectedTags,

        note.edescription

    );
    setShowModal(false);
    showAlert("Note Updated Successfully " , "success")


  };



const [search, setSearch] = useState("");


const searchNotes = (e) => {
  const value = e.target.value;
  setSearch(value)

};

const filteredNotes = Array.isArray(notes)
  ? notes.filter((note) =>
      (note.title || "").toLowerCase().includes(search.toLowerCase())
    )
  : [];


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


   


     {/* Search Box */}

              <div className="input-group">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search..."
        
        onChange={(e) => {
        searchNotes(e)
}}
          />
        
        </div>








     {/* Search Box */}





      <div className="row my-4">

       

{Array.isArray(notes) && notes.length === 0 ? (
  <h2>No Notes To Display</h2>
) : search.length > 0 && filteredNotes.length === 0 ? (
  <h4 className="text-center mt-3">No matching notes found</h4>
) : (
  filteredNotes.map((note) => (
    <NoteItem key={note._id} note={note} updatenote={updatenote} />
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
            
              selectedTags.includes(tag)? "active-tag" : ""
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