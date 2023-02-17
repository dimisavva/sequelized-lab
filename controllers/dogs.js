const { Dog } = require("../models")

const create = async (req, res) => {
try {
  const dog = await Dog.create(req.body)
  console.log(dog.toJSON())
  res.status(200).json(dog)
} catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
create
}