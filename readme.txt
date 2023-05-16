Write JavaScript code that performs the following tasks:

1. Declare a constant variable named `generateButton` and assign it the HTML element with the ID "generateButton" using `document.getElementById`.

2. Declare a constant variable named `jokeText` and assign it the HTML element with the ID "jokeText" using `document.getElementById`.

3. Implement an asynchronous function named `getDadJokes` that performs the following steps:
   - Use the `await` keyword to fetch data from "https://icanhazdadjoke.com/" using the `fetch` function.
   - Include the necessary request options to specify the HTTP method as "GET" and the "Accept" header as "application/json".
   - Assign the response to a variable named `response`.
   - Use the `await` keyword to parse the response data as JSON and assign it to a variable named `jsonJokeData`.
   - Set the `textContent` property of the `jokeText` element to the `joke` property of `jsonJokeData`.

4. Attach a "click" event listener to the `generateButton` element that invokes the `getDadJokes` function when clicked.

5. Declare an object named `myUsers` with a property named `userList` set to an empty array.

6. Implement an asynchronous function named `myCoolFunction` that performs the following steps:
   - Use the `await` keyword to fetch data from "https://jsonplaceholder.typicode.com/users" using the `fetch` function.
   - Assign the response to a variable named `response`.
   - Use the `await` keyword to parse the response data as JSON and assign it to a variable named `jsonUserData`.
   - Return `jsonUserData` from the function.

7. Implement an asynchronous function named `anotherFunc` that performs the following steps:
   - Assign the result of calling the `myCoolFunction` function to a variable named `data`.
   - Assign the value of `data` to the `userList` property of the `myUsers` object.
   - Output the `myUsers` object to the console using `console.log`.

8. Invoke the `anotherFunc` function.

9. Output the string "hello" to the console using `console.log`.

Ensure that the code follows the provided instructions and executes the expected operations.

Good luck with your coding!
