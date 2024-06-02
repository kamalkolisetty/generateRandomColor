# README

## JavaScript Practice Scripts

This repository contains a collection of JavaScript code snippets and exercises. The main focus of these scripts is to demonstrate various JavaScript concepts and functionalities such as template literals, loops, functions, event listeners, and DOM manipulation.

### Contents

1. **Template Literals**
   - Demonstrates embedding expressions in a string using backticks.

2. **Object and Array Handling**
   - Creating and manipulating objects and arrays.
   - Iterating through arrays using `for...of`.

3. **Prompt and Random Number Generation**
   - Using `prompt` to get user input and generating random numbers.

4. **Methods and Functions**
   - Defining and invoking methods in objects.
   - Arrow functions and default parameters.
   - Using `reduce` for array manipulation.

5. **Spread and Rest Operators**
   - Using spread operator to pass array elements as arguments.
   - Using rest operator to gather function arguments.

6. **Destructuring**
   - Array and object destructuring for easier data access.

7. **Event Listeners and DOM Manipulation**
   - Adding event listeners to buttons.
   - Manipulating DOM elements such as changing text and background color.

### Detailed Example: Random Color Generator

One of the notable examples is a Random Color Generator which changes the background color of a `div` element and displays the RGB value in an `h3` element upon a button click.

#### Code Explanation

1. **Button Event Listener**
   - A button is selected using `document.querySelector("button")`.
   - An event listener is added to the button to listen for `click` events.

2. **Random Color Generation Function**
   - `getRandomColor` function generates a random RGB color value.
   - RGB values are generated using `Math.floor(Math.random()*255)` for red, green, and blue components.

3. **DOM Manipulation**
   - When the button is clicked, the `click` event triggers a function that:
     - Selects an `h3` element and updates its text to show the generated RGB value.
     - Selects a `div` element and changes its background color to the generated RGB value.

#### Code Snippet

```javascript
let btn = document.querySelector("button");

fn1 = () => {
    console.log("color generator");
}

getRandomColor = () => {
    // RGB values lie between 0 to 255
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let finalColor = `rgb(${r},${g},${b})`;

    return finalColor;
}

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.innerText = "";
    div.style.backgroundColor = randomColor;
});
```

### Running the Code

To run the code:

1. Open the HTML file containing this script in a web browser.
2. Click the button to generate a random color.
3. Observe the changes in the `h3` element displaying the RGB value and the `div` element's background color.

### Requirements

- Basic understanding of HTML and JavaScript.
- A web browser to execute the script.

### Conclusion

This collection of JavaScript snippets serves as a hands-on practice to understand and apply various JavaScript concepts. Feel free to explore, modify, and extend the examples to enhance your learning experience.

## Demonstration
