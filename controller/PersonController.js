const Person = require("../model/Person");

// adding new Person

const addPerson = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required!" });
    }

    // check if name is type string
    if (typeof name !== "string") {
      return res.status(400).json({ error: "Name must be a string" });
    }

    // check if name is available

    const availableName = await Person.findOne({ name });
    if (availableName) {
      return res.status(400).json({
        error: "Name already exists! Choose new name or add more characters",
      });
    }
    // saving person to the database
    const person = await Person.create({
      name,
    });
    res.status(201).json({ message: "Created Successfully!", person });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// getting all Person

const getPerson = async (req, res) => {
  try {
    const person = await Person.find();
    if (!person) {
      return res.status(400).json({ error: "cannot get all People" });
    }
    res.status(200).json({ message: "People gotten successfully!", person });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// getting a specific person by id

const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await Person.findById(id);
    if (!person) {
      return res
        .status(404)
        .json({ error: `cannot find the person with the id ${id}` });
    }

    res.status(200).json({ message: "gotten successfully!", person });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// updating an existing person

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required!" });
    }

    // check if name is type string
    if (typeof name !== "string") {
      return res.status(400).json({ error: "Name must be a string" });
    }

    // check if name is available

    const availableName = await Person.findOne({ name });
    if (availableName) {
      return res.status(400).json({
        error: "Name already exists! Choose new name or add more characters",
      });
    }
    // update and save to the database
    const person = await Person.findByIdAndUpdate(id, req.body);
    if (!person) {
      return res
        .status(404)
        .json({ error: `cannot find the person with the id ${id}` });
    }

    const updatedPerson = await Person.findById(id);
    res
      .status(200)
      .json({ message: "Person updated successfully!", updatedPerson });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// deleting an existting person
const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await Person.findByIdAndDelete(id);

    if (!person) {
      return res
        .status(404)
        .json({ error: `cannot find the person with the id ${id}` });
    }
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { addPerson, getPerson, getOne, updatePerson, deletePerson };
