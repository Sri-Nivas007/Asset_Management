
const db = require('../database/models/index.js');
const Asset = db.assets;

const createAsset = async (req, res) => {
  try {
    const { type, make_model, serial_number } = req.body;
    const newAsset = await Asset.create({
      type,
      make_model,
      serial_number,
    });
    res.status(201).json(newAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, make_model, serial_number } = req.body;
    const asset = await Asset.findByPk(id);
    if (!asset) {
      res.status(404).json({ message: 'Asset not found' });
    } else {
      await asset.update({
        type,
        make_model,
        serial_number,
      });
      res.status(200).json(asset);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findByPk(id);
    if (!asset) {
      res.status(404).json({ message: 'Asset not found' });
    } else {
      await asset.destroy();
      res.status(204).end();
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createAsset,
  updateAsset,
  deleteAsset,
};
