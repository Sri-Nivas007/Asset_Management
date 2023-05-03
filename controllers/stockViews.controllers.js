const db = require('../database/models/index.js');
const stockViews = db.stockViews;

const createStock = (req, res) => {
  const { assetType, branch, totalAssets, totalValue } = req.body;

  stockViews
    .create({
      assetType,
      branch,
      totalAssets,
      totalValue,
    })
    .then((stockView) => res.json(stockView))
    .catch((err) => res.status(500).json({ message: err.message }));
};

const findAllStock = (req, res) => {
  stockViews
    .findAll()
    .then((stockViews) => res.json(stockViews))
    .catch((err) => res.status(500).json({ message: err.message }));
};

const findOneStock = (req, res) => {
  const id = req.params.id;

  stockViews
    .findByPk(id)
    .then((stockView) => res.json(stockView))
    .catch((err) => res.status(500).json({ message: err.message }));
};

const updateStock = (req, res) => {
  const id = req.params.id;
  const { assetType, branch, totalAssets, totalValue } = req.body;

  stockViews
    .update(
      {
        assetType,
        branch,
        totalAssets,
        totalValue,
      },
      {
        where: { id },
      }
    )
    .then((num) => {
      if (num == 1) {
        res.json({ message: 'Stock view updated successfully' });
      } else {
        res
          .status(500)
          .json({ message: `Failed to update stock view with id=${id}` });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

const deleteStock = (req, res) => {
  const id = req.params.id;

  stockViews
    .destroy({
      where: { id },
    })
    .then((num) => {
      if (num == 1) {
        res.json({ message: 'Stock view deleted successfully' });
      } else {
        res
          .status(500)
          .json({ message: `Failed to delete stock view with id=${id}` });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports = {
  createStock,
  findAllStock,
  findOneStock,
  updateStock,
  deleteStock,
};
