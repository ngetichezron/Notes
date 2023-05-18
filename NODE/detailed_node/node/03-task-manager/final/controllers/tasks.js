// task manager api
// set up and connect to cloud
// perform crud operations 
// only backend (node)

//   first project
// form analyst - frontend
// send request to api, user can crud tasks

// set up api that communicates with cloud db 
// form 

/////////changing commands in the script, dependency section


//1. set up basic server
//2. look up your app to establish what routes you are going to have
//3. get (get info), edit(post)
//





const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}




const createtTask = async (req, res) => {
  const task = await Task.create({name:'first task'})
  //const task = await Task.create(req.body)
  res.send(req.body)
  //res.status(201).json({task})
}


//    get
const createtTask = async (req, res) => {
  try {
    const task = await Task.create({name:'first task'})
    res.send(req.body)
  } catch (error) {
    res.status(500).json({msg:error})
  }


}


//  post
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({msg:error})
  }


}



//  setting up a route to get a single item 
const getTask = async (req, res) => {
  try {
    const {id:taskID} = req.params 
    const task = await Task.findOne({_id:taskID})
 
    // sth wrong with id, not matching
    if (!task) {
      
      
      //always set up return
      // to let js know when to return from the function
      return res.status(404).json({msg:`No task with ID : ${taskID}`})
    }


    res.status(200).json({task})
  } catch (error) {
      res.status(500).json({msg:error})
  }


}




const deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params 
    const task = await Task.findOneAndDelete({_id:taskID})

    if (!task) {
      return res.status(404).json({msg:`No task with ID : ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
      res.status(500).json({msg:error})
  }


}





const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params   
    const task = await Task.findOneAndUpdate({_id:taskID} req.body,{
      new: true,
      runValidators: true,

    })
    
    if (!task) {
      return res.status(404).json({msg:`No task with ID : ${taskID}`})
    }
    res.status(200).json({task})

    //res.status(200).json({id:taskID, data: req.body})
  } catch (error) {
      res.status(500).json({msg:error})
  }


}



// inorder to serve static files:
// app.use(express.static('./public'))





// postman and mongoose should read the tasks for you to continue\



// only properties specified in the schema will be passed on to the database. Everything else will be ignored
// name and completed are properties specified in the schema

const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name:String,
  completed:Boolean
})
module.exports = mongoose.model('Task', TaskSchema)
