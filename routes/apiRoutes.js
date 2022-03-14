const router = require('express').Router();
const storage = require('../db/storage.js')

// GET request for all the notes
// to test this do localhost:3001/notes 
router.get('/notes', (req,res) => {
    storage
    .getNotes()
    .then((notes) =>{
        return res.json(notes);
    }).catch((err) =>res.status(500).json(err))
})

router.post("/notes", (req, res) => {
    storage
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch(err => res.status(500).json(err));
  });
  

  router.delete("/notes/:id", function(req, res) {
    storage
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });

module.exports = router;