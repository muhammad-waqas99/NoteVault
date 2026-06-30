


import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {


  // const HOST = "http://localhost:5000"

    const HOST = process.env.REACT_APP_API_URL;


const notesInitial =[]
const [notes , setNotes] =useState(notesInitial)

  const [loadingSkeleton ,setLoadingSkeleton] =useState(false)
  const [loading , setLoading] =useState(false)
  const [globalLoading, setGlobalLoading] = useState(false);


const getNotes = async()=>{
      const response = await fetch(`${HOST}/api/notes/fetchallnotes`,{
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : localStorage.getItem('token')
    },

    
   })

   const json = await response.json()
   

   console.log(json)
   setNotes(json)
   setLoadingSkeleton(false)
   console.log(notes)
}

const addNote = async (title, description, tags) => {
  setLoading(true); 
  try {
    const response = await fetch(`${HOST}/api/notes/add-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tags })
    });

    const json = await response.json();
    setNotes(notes.concat(json));
  } catch (error) {
    console.error("Error adding note:", error);
  } finally {
    setLoading(false); 
  }
};
const deleteNote =async(id)=>{
 setLoading(true)
  try {
         const response = await fetch(`${HOST}/api/notes/deletenote/${id}`,{
    method : "DELETE",
    headers : {
      "Content-Type" : "application/json",
     "auth-token"   : localStorage.getItem('token')
    },

    
   })



  console.log("deleting note with id : " , id )
 
  const newNotes = notes.filter((note)=>{
    return note._id !==id
  })

   setNotes(newNotes)
  } catch (error) {
    console.error("Error adding note:", error);
  }finally{
    setLoading(false)
  }
   



}
const editNote = async (id, title, tags, description) => {
  setLoading(true); 
  try {
    const response = await fetch(`${HOST}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tags }),
    });

    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tags = tags;
        break;
      }
    }
    setNotes(newNotes);
  } catch (error) {
    console.error("Error editing note:", error);
  } finally {
    setLoading(false); 
  }
};


const togglePin =async(id)=>{
   const response = await fetch(`${HOST}/api/notes/togglepin/${id}`,{
    method : "PUT",
    headers : {
      "Content-Type" : "application/json",
     "auth-token"   : localStorage.getItem('token')
    },

    
   })

   const json = await response.json() 
  if (!json.success) {
  return;
}

   const newNotes = JSON.parse(JSON.stringify(notes))
     for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if(element._id === id ){
      newNotes[index].isPinned = !newNotes[index].isPinned;


      break
    }





}
setNotes(newNotes)
}


  return (
    <NoteContext.Provider value={{ notes , addNote , deleteNote  , getNotes ,editNote ,setNotes ,togglePin , setLoadingSkeleton, loadingSkeleton , loading , setLoading , globalLoading , setGlobalLoading}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;