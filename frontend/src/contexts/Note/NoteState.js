


import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {


  // const HOST = "http://localhost:5000"

    const HOST = process.env.REACT_APP_API_URL;


const notesInitial =[]
const [notes , setNotes] =useState(notesInitial)




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
   console.log(notes)
}

const addNote = async(title, description , tags)=>{
  console.log('getting tags by add note ' , tags)

     const response = await fetch(`${HOST}/api/notes/add-note`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : localStorage.getItem('token')
    },

     body: JSON.stringify({title,description,tags})
   })

   const json = await response.json()
   console.log("add note " , json)

  
  

  
  setNotes(notes.concat(json));
  console.log(" New Note Added")

}
const deleteNote =async(id)=>{
   

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

}
const editNote =async(id, title, tags , description)=>{
   
   const response = await fetch(`${HOST}/api/notes/updatenote/${id}`,{
    method : "PUT",
    headers : {
      "Content-Type" : "application/json",
     "auth-token"   : localStorage.getItem('token')
    },
     body : JSON.stringify({title,description,tags})
    
   })

   const json = await response.json() 



    let newNotes = JSON.parse(JSON.stringify(notes))

  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if(element._id === id ){
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tags = tags;

      break
    }


    
  }
 setNotes(newNotes)
}



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
    <NoteContext.Provider value={{ notes , addNote , deleteNote  , getNotes ,editNote ,setNotes ,togglePin}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;