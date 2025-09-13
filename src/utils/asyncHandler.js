const asyncHandler = (requestHandler)=>{
  (req, res, next) => {
    Promise.resolve.apply(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export {asyncHandler}