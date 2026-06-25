


import NoteContext from "./NoteContext";

const NoteState = (props) => {

const Notes = [
  {
    _id: "6a3ad20c0d8e6d26bc88a9d0",
    user: "6a3984491e9ecdf541b732b9",
    title: "my title",
    description: "wake up early",
    tag: "personal",
    Date: "2026-06-23T18:35:56.869Z"
  },
  {
    _id: "6a3d8dde200bcddf7d84f8a4",
    user: "6a3d8cd6ffe08aea611d54ef",
    title: "my title",
    description: "wake up early",
    tag: "personal",
    Date: "2026-06-25T20:21:50.706Z"
  }
];
  return (
    <NoteContext.Provider value={{ Notes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;