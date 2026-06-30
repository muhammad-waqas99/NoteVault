const express = require("express");
const fetchUser = require("../middlewares/fetchUser");
const Note = require("../models/Note");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { findById } = require("../models/User");

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });

    res.send(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post(
  "/add-note",
  fetchUser,
  [
    body("title", "Name must be at least 3 characters long").isLength({ min: 3 }),
    body("description", "Password must be at least 6 characters long").isLength(
      { min: 6 },
    ),
      body("tags")
    .exists()
    .withMessage("tagss field is required")
    .isArray({ min: 1, max: 3 })
    .withMessage("You must select between 1 and 3 tagss")
    .custom((tagss) => {
      const uniquetagss = new Set(tagss);

      if (uniquetagss.size !== tagss.length) {
        throw new Error("Duplicate tagss are not allowed");
      }

      return true;
    }),
     body("tags.*")
    .isString()
    .withMessage("Each tags must be a string")
    .trim()
    .notEmpty()
    .withMessage("tags cannot be empty")
    .isLength({ min: 2, max: 20 })
    .withMessage("Each tags must be between 2 and 20 characters")
  ],
  async (req, res) => {


   
        try {

          const {tags , description , title} = req.body
          const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }


          const note = new Note({
            title, tags ,description , user : req.user.id
          })

          const savednote = await note.save()


          res.json(savednote)


            
        } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  },
  
);



//  Route 3 Update an existing Note Using :  PUT "/api/notes/updatenote"  . Login required

router.put('/updatenote/:id', fetchUser, async (req, res) => {
   const { title, description, tags } = req.body;

   let note = await Note.findById(req.params.id);

   if (!note) return res.status(404).send('Not Found');

   if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
   }


   const newNote = {};
   if (title) newNote.title = title;
   if (description) newNote.description = description;
   if (tags) newNote.tags = tags;

   note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { returnDocument: 'after' }
   );

   res.json(note);
});




//  Route 4 Delete  an existing Note Using :  Delete "/api/notes/deletenote"  . Login required


router.delete('/deletenote/:id', fetchUser, async (req, res) => {


   let note = await Note.findById(req.params.id);

   if (!note) return res.status(404).send('Not Found');

   if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
   }



   note = await Note.findByIdAndDelete(req.params.id );

res.json({
   success: "Note deleted",
   note: note
});
});




router.put('/togglepin/:id', fetchUser, async (req, res) => {
  let success = false;
  
  try {
   
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ success, error: "You are not allowed to modify this note" });
    }

    
    if (note.user.toString() !== req.user.id) { 
      return res.status(401).json({ success, error: "You are not allowed to modify this note" });
    }

   
    note.isPinned = !note.isPinned;
    await note.save(); 

    success = true;
    res.json({ success, note });

  } catch (error) {
    let success = false
    console.error(error.message);
res.status(500).json({
  success: false,
  error: "Internal Server Error"
});
  }
});


module.exports = router;
 