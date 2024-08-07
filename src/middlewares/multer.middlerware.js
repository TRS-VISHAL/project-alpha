import multer from "multer";
     
const storage = multer.diskStorage({
     destination : function(req, file, cb ){
     cb(null , "./public/temp")
     },
     filename : function(req, file, cb){
          cb(null, file.originalname)
     }
})

export const upload = multer({
     storage : storage,

     // limits : { fileSize : 1000000 }, // 1MB
     // fileFilter : function(req, file, cb){
     //      if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
     //           cb(null, true)
     //      }else{
     //           cb(new Error("Only jpeg and png format allowed"), false)
     //      }
     // },
     
 })
