


import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {


  const HOST = "http://localhost:5000"



const [notes , setNotes] =useState([])



const getNotes = async()=>{
      const response = await fetch(`${HOST}/api/notes/fetchallnotes`,{
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzZDhjZDZmZmUwOGFlYTYxMWQ1NGVmIn0sImlhdCI6MTc4MjQxODY2MX0.KbYj_MSC0GvMr3zkBLlDVy8XQwvCc6MbY5vDeVf5NUQ"
    },

    
   })

   const json = await response.json()

   console.log(json)
   setNotes(json)
}

const addNote = async(title, description , tag)=>{

     const response = await fetch(`${HOST}/api/notes/add-note`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzZDhjZDZmZmUwOGFlYTYxMWQ1NGVmIn0sImlhdCI6MTc4MjQxODY2MX0.KbYj_MSC0GvMr3zkBLlDVy8XQwvCc6MbY5vDeVf5NUQ"
    },

     body: JSON.stringify({title,description,tag})
   })

   const json = await response.json()

  
  

  
  setNotes(notes.concat(json));
  console.log(" New Note Added")

}
const deleteNote =async(id)=>{
   

     const response = await fetch(`${HOST}/api/notes/deletenote/${id}`,{
    method : "DELETE",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzZDhjZDZmZmUwOGFlYTYxMWQ1NGVmIn0sImlhdCI6MTc4MjQxODY2MX0.KbYj_MSC0GvMr3zkBLlDVy8XQwvCc6MbY5vDeVf5NUQ"
    },

    
   })



  console.log("deleting note with id : " , id )
 
  const newNotes = notes.filter((note)=>{
    return note._id !==id
  })

   setNotes(newNotes)

}
const editNote =async(id, title, tag , description)=>{
   
   const response = await fetch(`${HOST}/api/notes//updatenote/${id}`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzZDhjZDZmZmUwOGFlYTYxMWQ1NGVmIn0sImlhdCI6MTc4MjQxODY2MX0.KbYj_MSC0GvMr3zkBLlDVy8XQwvCc6MbY5vDeVf5NUQ"
    },
     body : JSON.stringify({title,description,tag})
    
   })

   const json =response.json() 

  for (let index = 1; index < notes.length; index++) {
    const element = notes[index];
    if(element._id = id ){
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
    
  }

}


  return (
    <NoteContext.Provider value={{ notes , addNote , deleteNote  , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;