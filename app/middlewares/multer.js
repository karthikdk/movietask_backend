const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null,`${Date.now()}-${file.originalname}-${path.extname(file.originalname)}`)
    }
})

const uploads = multer({storage})

module.exports = uploads
