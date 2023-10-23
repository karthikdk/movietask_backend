const Movie = require("../models/MovieModel");
const movieController={}


//movie creation
movieController.create=async(req,res)=>{
    try {
        const body=req.body
        console.log(body)
        if(Object.keys(body).length===0){
            return res.json(' form input fields required')
        }
        if(!body.title || !body.description){
            return res.json('invalid data')
        }
        const file=req.file
        const movie=new Movie(body)
        movie.poster=file.filename
        const movieDoc=await movie.save()
        res.json(movieDoc)
    } catch (error) {
        res.json(error)
    }
}

//listing movies
movieController.list = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        res.json(error)
    }
}

//show movies
movieController.show = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        res.json(movie)
    } catch (error) {
        res.json(error)
    }
}
module.exports=movieController