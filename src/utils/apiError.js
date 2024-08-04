class apiError extends Error {
     
     constructor(statusCode , message , error , stack){
          super(message);
          this.statusCode = statusCode;
          this.error = error;
          this.stack = stack;

          if(stack){
               this.stack =  stack;
          }else{
               Error.captureStackTrace(this, this.constructor);
          }
     }
}

export {apiError}