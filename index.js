const express=require('express')
const cors=require('cors')
const configureDB = require('./DB/configureDB')
const movieController = require('./app/controllers/MovieController')
const uploads = require('./app/middlewares/multer')
const port=3031
configureDB()
const app=express()
app.use(express.json())
app.use(express.static('uploads'))
app.use(cors())


  //Api calls
  //create
  app.post('/api/movies/create', uploads.single('poster'), movieController.create)
 
  //show
  app.get('/api/movies/show/:id',movieController.show)
 
  //listing
  app.get('/api/movies/list',movieController.list)

app.listen(port,()=>{
    console.log('server running on port',port)
})

