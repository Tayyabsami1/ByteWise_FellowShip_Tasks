class ApiError extends Error {
    constructor(statusCode, message = "Something went Wrong", error = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        this.success=false;
        if(this.stack)
        {
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }

    }
}