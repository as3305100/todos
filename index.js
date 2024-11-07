const express = require('express')
const server = express()
const mongoose = require('mongoose');
const cors = require('cors')
const {router} = require('./routes/todoRoute')
const path = require('path')

// config dotenv file
require('dotenv').config()

// db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://as3305100:Anurag1234@cluster0.rzfl7.mongodb.net/todosDatabase?retryWrites=true&w=majority&appName=Cluster0');
   console.log("database connected")
}



server.use(cors())
server.use(express.json())
 server.use(express.static(path.join(__dirname, 'public')))

server.use(express.urlencoded({extended: true}))
server.use('/todos', router)

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
    

/*
server.get('/', async (req, res) => {
    try { 
        const todos = await Todo.find()
        res.status(200).json(todos)
      }catch (err){
       res.status(400).send(err)
      }
})

server.post('/', (req, res) => {
    const todo = new  Todo(req.body)
    try { 
      todo.save()
      res.status(201).send(todo)
    }catch(err) {
      console.log(err)
    }
})

server.delete('/:id', async (req, res) => {
    try { 
         const todo = await Todo.findOneAndDelete({ id: req.params.id }); 
         if (!todo)   { 
            return res.status(404).send('Product not found'); 
         } 
          res.status(200).send(`Deleted product`);
         } catch (err)
          { 
             res.status(500).send(err);

          }
})
server.patch('/:id', async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    if(req.params.id && req.body.text) {
        console.log("hello")
    try { 
       const text = req.body.text
        await Todo.findOneAndUpdate({ id: req.params.id }, {text: text})
      
     }catch(err) {
        res.status(500).send(err)
     }
     return
    }
     
    

    try {
      let completed = req.body.completed
      console.log(completed)
       await Todo.findOneAndUpdate({ id: req.params.id }, {completed: completed})
    } catch(err) {
        res.status(500).send(err)
    }
   
    


})
    */




server.listen(8000, () => {
    console.log('Server is running on port 8000')
})