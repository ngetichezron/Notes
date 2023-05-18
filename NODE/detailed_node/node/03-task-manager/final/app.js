const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);


// 



app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();





// sending json from application
// i.e create new task
// access data from routes:
// use middleware built in to express
// ... express.json




// const express = require('express');
// const app = express()
// const tasks = require('./routes/tasks)


//          middleware
// app.use(express.json())  // if we don't use this, we will not have data in the req,res body




// // routes
// app.get('/hello', (req, res) => {
//   res.send('Task Manager App');
// })


//////am using the middleware(app.use), where am looking for the api version 1 and then tasks,
////// then i pass in my I pass in my router(const.tasks=require...) (task router, )
/////// in the router, I have this route path (router.route('/').get....(located in another file))
//////// which matches whatever i pass over (app.use('/api/v1/tasks', tasks))
//////// and then i set up a get route(from the other file,,, continue... .get((req, res) => {
////////      res.send('all items')
///        }))
////////// where i manually pass in my controller,, then res.send....



// app.use('/api/v1/tasks', tasks)

//       conventions for routes, and meanings
// app.get('/api/v1/tasks')        // get all the tasks
// app.post('/api/v1/tasks')        // create new tasks
// app.get('/api/v1/tasks/:id')        // get single task
// app.patch('/api/v1/tasks/:id')        // update task
// app.delete('/api/v1/tasks/:id')        // delete task

// const port = 3000

//////////////// set up separate routes and controllers to be neat
//     take the logic: get((req, res) => { res.send('all items') }))
// place it in a separate file: there will be more logic  than just the one above: res.send
// 23.42





// const { getAllTasks } = require('/controllers/tasks')
// router.route('/').get(getAllTasks)




