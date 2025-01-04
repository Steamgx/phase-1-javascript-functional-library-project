// index.js

// myEach: Executes the given callback on each element in the collection.
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection; // Returns the original collection.
  }
  
  // myMap: Creates a new array populated with the results of calling the provided function on each element.
  function myMap(collection, callback) {
    let result = [];
    myEach(collection, (element, index, collection) => {
      result.push(callback(element, index, collection));
    });
    return result;
  }
  

  // myFind: Returns the first element that satisfies the provided callback function.
  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // myFilter: Returns a new array containing all elements that pass the test in the callback.
  function myFilter(collection, callback) {
    let result = [];
    myEach(collection, (element, index, collection) => {
      if (callback(element, index, collection)) {
        result.push(element);
      }
    });
    return result;
  }
  
  // mySize: Returns the size of the collection (array or object).
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  // myFirst: Returns the first element or the first n elements of the collection.
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  // myLast: Returns the last element or the last n elements of the collection.
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  // myKeys: Returns an array of the object's own property names.
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  // myValues: Returns an array of the object's own property values.
  function myValues(obj) {
    return Object.values(obj);
  }
  
  // Exporting functions for use in the test file.
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  // myReduce: Applies the callback to reduce the collection (array or object) to a single value.
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
  
    // If the collection is an array
    if (Array.isArray(collection)) {
      if (initialValue === undefined) {
        accumulator = collection[0];
        startIndex = 1;
      }
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      // If the collection is an object
      const keys = Object.keys(collection);
      if (initialValue === undefined) {
        accumulator = collection[keys[0]];
        startIndex = 1;
      }
      for (let i = startIndex; i < keys.length; i++) {
        accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
      }
    }
    
    return accumulator;
  }
  