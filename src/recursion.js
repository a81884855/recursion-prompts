/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n === 0)
 	{
    return 1;
 	}else if(n<0){
 		return null;
 	}
  return n * factorial(n-1);
}

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	var array1 = array.slice(0);
	if (array.length === 1) {
    return array[0];
  } else if(array.length === 0){
  	return 0;
  }
  else {
    return array1.pop() + sum(array1);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
      sum += arraySum(array[i]);
    }else{
      sum += array[i];
    }
  }return sum; 
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n === 0){
    return true
  }else if(n === -1){
    return false
  }else{
    if(n>0){
      return isEven(n - 2)
    }else{
      return isEven(n + 2)
    }
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  }else{
    if(n > 0){
      return n - 1 + sumBelow(n-1);
    }else{
      return n + 1 + sumBelow(n+1);
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var arr = [];
  if(y - x===1 || y - x ===0 || x - y === 1){
    return [];
  }

  if(y > x){
    y -= 1;
    arr.push(y);
  }else{
    y += 1;
    arr.push(y);
  }
  return range(x,y).concat(arr);
  // y = y > x ? y -1 : y + 1
  // return y === x ? [] : range(x,y).concat(y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0){
    return 1
  }else if(exp === 1){
    return base
  }

  if(exp > 1){
    if(exp > 5){
      exp -= 2;
      return base * base * exponent(base, exp);
    }
    exp -= 1;
    return base * exponent(base, exp);
  }else{
    exp += 1;
    return exponent(base, exp)/ base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1){
    return true
  }else if(n<1){
    return false
  }return powerOfTwo(n/2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var answer = [];
  var arr = string.split("");
  if(string.length === 0){
    return answer.join("");
  }else{
    answer.push(arr.shift());
    return reverse(arr.join("")).concat(answer);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split("")
  if(string.length === 0 || string.length === 1){
    return true;
  }else if(string.shift().toLowerCase() !== string.pop().toLowerCase()){
    return false;
  }else{
    return palindrome(string.join(""))
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(y === 0){
    return NaN;
  }

  if(x < 0){
    if(x - y > 0 || x + y >0){
      return x
    }
    if(y > 0){
      x += y;
      return modulo(x, y);
    }else{
      x -= y;
      return modulo(x, y);
    }
  }

  if(x - y < 0){
    return x;
  }else if(x === y){
    return 0
  }else{
    x -= y;
    return modulo(x,y)    
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(x === 0 || y === 0){
    return 0;
  }

  if(y === 1 || y === -1){
    return x;
  }

  else{
    if(x > 0 && y >0){
      y -= 1;
      return x + multiply(x, y);
    }else if(x > 0 && y < 0){
      x -= 1;
      return y + multiply(x, y);
    }else if(x < 0 && y > 0){
      y -= 1;
      return x + multiply(x, y);
    }
    else{
      y = -y - 1;
      x = -x;
      return x + multiply(x, y);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var count = 0;
    if(y === 0){
      return NaN;
    }

    if(x < y || (x < 0 && x > y)){
      return 0;
    }
    if(x - y >= 0){
      count += 1;
    return count += divide(x - y, y)
    }
  return count;
}

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0){
    return null;
  }

  var max = Math.max(x,y);
  var min = Math.min(x,y);
  var temp = max%min;
  return (!temp) ? min : gcd(min,temp);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.split("")[0] !== str2.split("")[0]){
    return false;
  }else if(str1.length === 0 && str2.length === 0){
    return true
  }
  else{
    str1 = str1.split("");
    str1.shift();
    str2 = str2.split("");
    str2.shift();
    return compareStr(str1.join(""), str2.join(""));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var arr = [];
  str = str.split("");
  if(str.length === 0){
    return arr;
  }else{
    arr.push(str.pop());
    return createArray(str.join("")).concat(arr);
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var arr = [];
  if(array.length === 0){
    return arr;
  }else{
    arr.push(array.shift());
    return reverseArr(array).concat(arr);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var arr = [];
  if(length === 0){
    return arr;
  }else{
    arr.push(value);
    return buildList(value, length-1).concat(arr);
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var arr = [];
  if(n === 0){
    return arr;
  }else{
    if(n%15===0){
    arr.unshift("FizzBuzz");
    }else if(n%5===0){
      arr.unshift("Buzz");
    }else if(n%3===0){
      arr.unshift("Fizz");
    }else{
      arr.unshift(n.toString());
    }
    return fizzBuzz(n-1).concat(arr);
  } 
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if(array.length === 0){
    return count
  }else{
    if(value === array.pop()){
      count += 1;
      return count +=countOccurrence(array, value);
    }else{
      return count +=countOccurrence(array, value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arr = [];
  var array1 = array.slice(0);
  if(array1.length > 0){
    arr.push(callback(array1.pop()));
    return rMap(array1, callback).concat(arr);
  }else{
    return arr;
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

    for(var i in obj){
      if(i === key){
        count += 1;
      }
      else if(typeof obj[i] === "object"){
        count += countKeysInObj(obj[i],key)   
    }
  }return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for(var i in obj){
    if(typeof obj[i] === "object"){
      count += countValuesInObj(obj[i], value)
    }else if(obj[i] === value){
      count += 1;
    }
  }return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

    for(var key in obj){
      if(key === oldKey){
        obj[newKey] = obj[key];
        delete obj[oldKey];
      }

      if(typeof obj[key] === 'object'){
        obj[key] = replaceKeysInObj(obj[key], oldKey, newKey)
      }

  }return obj;

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if(n < 1){
    return null;
  }
  if(n < 2){
    return [0, 1]
  }
  if(n < 3){
    return [0, 1, 1]
  }else{
    var temp = fibonacci(n-1);
    var arr = temp[temp.length - 1] + temp[temp.length - 2];
    return fibonacci(n-1).concat(arr)
  }
}
// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n<0){
    return null;
  }
  if(n === 0){
    return 0
  }else if(n===1){
    return 1
  }
  return nthFibo(n-1) + nthFibo(n-2)
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var arr = [];
  if(array.length === 0){
    return arr
  }else{
    arr.push(array.pop().toUpperCase())
  }
  return capitalizeWords(array).concat(arr);
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var arr = [];
  if(array.length === 0){
    return arr
  }else{
    temp = array.pop();
    arr.push(temp[0].toUpperCase() + temp.slice(1));
  }
  return capitalizeFirst(array).concat(arr);
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var answer = 0;
  for (var i in obj) {
    if(typeof obj[i] === 'object'){
      answer += nestedEvenSum(obj[i])
    }else if(typeof obj[i] === 'number'){
      if(!(obj[i]%2)){
        answer += obj[i]      
      }
    }
  }
  return answer;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var output = [];
  var arr = array.slice(0);
  if(arr.length === 0){
    return output;
  }

  var temp = arr.pop();
  if(Array.isArray(temp)){
    for(var i in temp){arr.push(temp[i])}
  }else{
    output.push(temp);
  }
  return flatten(arr).concat(output);
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj={}) {
  if(str.length === 0){
    return obj
  }

  obj[str[0]] = ++obj[str[0]] || 1;

  return letterTally(str.slice(1), obj)
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var arr = [];
  var list1 = list.slice(0);
  if(list1.length === 0){
    return arr
  }else{
    var temp = list1.pop();
    if(temp !== list1[list1.length-1]){
      arr.push(temp)
    }
  }return compress(list1).concat(arr);
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var answer = [];
  if(array.length === 0){
    return answer
  }else{
    answer.push(array.pop());
    answer[0].push(aug)
  }
  return augmentElements(array, aug).concat(answer);
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = [];
  var array1 = array.slice(0);
  if(array1.length === 0){
    return arr
  }else{
    var temp = array1.pop();
    if(temp !== 0 || (temp === 0 && array1[array1.length-1] !== 0)){
      arr.push(temp);
    }
  }return minimizeZeroes(array1).concat(arr);
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var output = [];
  var array1 = array.slice(0);
  
  if(array1.length === 0){
    return output;
  }else{
    var temp = array1.pop();
    if(array.length % 2){
      output.push(Math.abs(temp));
    }else{
      output.push(-Math.abs(temp));
    }
  }
  return alternateSign(array1).concat(output);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var num = {1: 'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'}
  var newWord = ""
  if(str.length === 0){
    return str
  }
  str = str.split("");
  letter = str.shift();
  if(num[letter] === undefined){
    newWord = letter
  }else{
    newWord = num[letter]
  }  
  return newWord.concat(numToText(str.join("")))
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min=0, max) {
  if(array.length === 0){
    return null
  }else{
    if(array[0] === target){
      return min||0
    }
  }
  return binarySearch(array.slice(1), target, min+=1, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if(array.length === 0){
    return array;
  }
  var answer = Math.max(...array);
  array1 = array.slice(0,array.indexOf(answer)).concat(array.slice(array.indexOf(answer) + 1));

  
  return mergeSort(array1).concat(answer)
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  answer = {};
  if(typeof input === 'object'){
    for(var key in input){
      if(typeof key === 'object'){
        answer[key] = clone(input[key])
      }else{
        answer[key] = input[key]
      }
    }
  }else{
    answer[key] = input[key];
  }
  return answer;
};
