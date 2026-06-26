


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

const addNote =(title, description , tag)=>{

     const response = await fetch(`${HOST}/api/notes/add-note`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "auth-token"   : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzZDhjZDZmZmUwOGFlYTYxMWQ1NGVmIn0sImlhdCI6MTc4MjQxODY2MX0.KbYj_MSC0GvMr3zkBLlDVy8XQwvCc6MbY5vDeVf5NUQ"
    },

     body: JSON.stringify({title,description,tag})
   })

   const json = await response.json()

  const note =   {
    _id: "6a3d8dde200bcddf7d84f8a4",
    user: "6a3d8cd6ffe08aea611d54ef",
    title: title,
    description: description,
    tag:  tag,
    Date: "2026-06-25T20:21:50.706Z"
  };
  

  
  setNotes(notes.concat(note));
  console.log(" New Note Added")

}
const deleteNote =(id)=>{


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

}


  return (
    <NoteContext.Provider value={{ notes , addNote , deleteNote  , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;