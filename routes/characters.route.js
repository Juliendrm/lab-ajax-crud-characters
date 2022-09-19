const router = require("express").Router();
const Character = require("../models/Character.model");
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneCharacter = await Character.findById(id);
    res.json(oneCharacter);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, occupation, cartoon, weapon } = req.body;
    if (!name || !cartoon || !occupation || !weapon) {
      return res.json({ message: "you should return all infons" });
    }
    const createdCharacter = await Character.create({
      name,
      occupation,
      cartoon,
      weapon,
    });
    res.json(createdCharacter);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const characterToUpdate = req.body;
    const { id } = req.params;
    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      characterToUpdate,
      { new: true }
    );
    res.json(updatedCharacter);
  } catch (error) {
    return res.json({ message: "character not found" });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    return res.status(204).send(`Character deleted :${req.params.id}`);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  const { name } = req.params;
  try {
    const oneCharacter = await Character.findOne({ name: name };
    res.json(oneCharacter);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
