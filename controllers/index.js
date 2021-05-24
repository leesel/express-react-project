const Cat = require('../models/cat');

const getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find();
        return res.status(200).json({ cats });
      } catch (error) {
        return res.status(500).send(error.message);
      }
}



module.exports = {
  getAllCats,
};
