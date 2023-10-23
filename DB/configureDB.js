const mongoose=require('mongoose')

const configureDB= async () => {
    try {
        const db=await mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
        console.log('connected to db')
    } catch (error) {
        console.log('error while connecting to db')
    }
}

module.exports= configureDB