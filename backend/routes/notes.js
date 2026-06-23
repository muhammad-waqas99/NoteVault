const express = require("express");
const fetchUser = require("../middlewares/fetchUser");
const Note = require("../models/Note");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
  ],
  async (req, res) => {


   
        try {

          const {tag , description , title} = req.body
          const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }


          const note = new Note({
            title, tag ,description , user : req.user.id
          })

          const savednote = await note.save()


          res.json(savednote)


            
        } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  },
);
module.exports = router;
