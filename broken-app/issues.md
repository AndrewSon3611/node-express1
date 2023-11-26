# Broken App Issues
1. Used async/await with map. Map function does not work in the context of asynchronous functions. it immediately returns an array of unresolved promises. -> Changed to Promise.all to allow for concurrent promise resolution.
2. Error handling is done incorrectly: the catch block is catching an error however, the error object is not defined properly.
3. Added app.use(express.json()) as we are accessing 'req.body.developers'