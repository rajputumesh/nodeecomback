const multer = require('multer');

const storage = multer.diskStorage(
    {
        filename: function ( req, file, cb ) {
            const filename = Date.now()+file.originalname;
            req.image = filename;
            cb( null, filename);
        }
    }
  );

const uploadimage = multer({ 
    dest: 'uploads/',
    storage:storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });

  module.exports = {
    uploadimage
  }