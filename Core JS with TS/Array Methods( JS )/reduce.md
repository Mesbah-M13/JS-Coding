# Defination:

- The reduce() method in JavaScript is an **array method** used to iterate over an array and **"reduce" its elements to a single value**.
- This single value can be anything: a number, a string, an object, or even another array.

# Basic Syntax:

array.reduce((accumulator, currentItem, index, array) => {

// return updated accumulator

}, initialValue)

# How it works:

The reduce() method takes two main arguments:

- reducer callback function: This function is executed on each element of the array. It takes four arguments:

1. accumulator (acc): This accumulates the callback's return values. It's the value returned from the previous invocation of the callback, or the initialValue if provided.
2. currentValue (curr): The current element being processed in the array.
3. currentIndex (idx - optional): The index of the current element.
4. array (arr - optional): The array reduce() was called upon.
5. initialValue (optional): This is the value to use as the first argument to the first call of the reducer callback.
