### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - Call backs, promises, async/await

- What is a Promise?
  - Promises is a method to handle asynchronous code. Promises is the eventual completion of code and allows the developer to create callbacks that will be executed once the operation has finished.

- What are the differences between an async function and a regular function?
  - Regular functions are synchronous ie. they execute one statement at a time. Asynchronous functions do not necessarily behave so. Upon handling asynchronous code, different methods are employed such as promises to handle behavior.

- What is the difference between Node.js and Express.js?
  - Node.js is a javascript runtime environment whereas Express.js is a web application framework for Node.js.

- What is the error-first callback pattern?
  - A callback function is used to handle the result of an asynchronous operation, and the first parameter of the said callback is reserved for the error object. If an error occurs during the operation, the first parameter is the error, otherwise is null or undefined. Later parameters are used to pass the result or any additional data.

- What is middleware?
  - functions or processes that are executed between receiving a request and sending a response. Middleware can accomplish multiple tasks such as modifying the request or the response.

- What does the `next` function do?
  - 'next' is used to pass control of the current middleware to the next middleware function. If 'next' is not called, the request-response cycle stops and no further middleware is executed.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
1. The code is making await requests for each user. This will bottleneck the performance, as it is currently handling an asynchronous operation. It will be better to "await Promise.All" the function to save time and performance. "Promise.All" executes the above code concurrently.

2. There is no error handling. 

3. Naming is unclear, better convention would be to rename the variables to what they are, ie. userElie, userMatt, userJoel, etc.

