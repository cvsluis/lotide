# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cvsluis/lotide`

**Require it:**

`const _ = require('@cvsluis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Function that asserts whether two arrays are equal
* `assertEqual`: Function that asserts whether two values are equal
* `assertObjectsEqual`: Function that asserts whether two objects are equal
* `countLetters`: Function that takes in a sentence and returns a count of each of the letters in the sentence
* `countOnly`: Function that takes in a collection of items and returns a specific subset of those items
* `eqArrays`: Function that compares two arrays and returns true if equal, and false if not
* `eqObjects`: Function that compares two objects and returns true if equal, or false if not equal
* `findKey`: Function that takes in an object and callback and returns the first key that meets the criteria specified in callback
* `findKeyByValue`: Function that takes in an object and a value and returns the first key that contains that value
* `flatten`: Function that takes in an array containing a nested array of elements and returns a flattened version of the array
* `head`: Function that takes in an array and returns the first element in the array
* `letterPositions`: Function that takes in a string and returns all indices of letter positions in the string
* `map`: Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `middle`: Function that takes in an array and returns middle most element of the array
* `tail`: Function that takes in an array and returns everything except the first element of the array
* `takeUntil`: Function that takes in an array and returns everything except the first element of the array
* `without`: Function that takes in an array and an itemsToRemove array and returns only the items from the source array that are not in the itemsToRemove array