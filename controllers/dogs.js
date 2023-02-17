const { Dog, Grooming } = require("../models")

const create = async (req, res) => {
try {
  const dog = await Dog.create(req.body)
  console.log(dog.toJSON())
  res.status(200).json(dog)
} catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try{
    const dogs = await Dog.findAll({
      include: [{model: Grooming, as: 'groomings'}]
    })
    res.status(200).json(dogs)
  }catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try{
    const dog = await Dog.findByPk(req.params.id)
    res.status(200).json(dog)
  }catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.id)
      dog.set(req.body)
      await dog.save()
      console.log(dog)
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteDog = async (req, res) => {
  try {
    // We can also call destroy on an instance:
    const dog = await Dog.findByPk(req.params.id)
    await dog.destroy()
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addGrooming = async (req, res) => {
  try {
    // Append a dogId to req.body:
    req.body.dogId = req.params.id
    const grooming = await Grooming.create(req.body)
    res.status(200).json(grooming)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
create,
index,
show,
update,
delete: deleteDog,
addGrooming
}