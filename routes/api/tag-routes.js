const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
    product_id: req.body.product_id,
    tag_id: req.body.tag_id,
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // create a new tag
});

router.put("/:id", (req, res) => {
  Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      },
    }
    // update a tag's name by its `id` value
  )
    .then((updateTag) => {
      res.json(updateTag);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
  // delete a category by its `id` value
});

module.exports = router;
