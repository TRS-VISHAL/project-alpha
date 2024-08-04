class apiResponse{
     constructor(statusCode , data , message = "success"){
          this.statusCode = statusCode;
          this.data = null;
          this.message = message;
          this.success = statusCode
     
}
}
export {apiResponse}