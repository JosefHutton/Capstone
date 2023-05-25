const { Router } = require("express");
const Contactus = require("../models/Contact");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newContact = new Contactus(request.body);
  newContact.save((error, record) => {
    // if (error && error.name && error.name === "ValidationError")
    if (error?.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Contactus.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Contactus.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Contactus.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});


module.exports = router;
