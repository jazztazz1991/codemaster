function getExpectedOutputs() {
    return {
        "helloWorld": "console.log(\"Hello World\")",
        "twoSum": "function sumOfTwoNumbers(num1, num2) {\n // Your code here\n return num1 + num2\n}",
        "forLoop":  "function forLoop(nums) {\n // Your code here\n  for (let i = 0; i <= nums.length; i++) {\n    console.log(i)\n  }\n}",
        "isEven": "function isEven(num) {\n // Your code here\n return num % 2 === 0\n}",
        "isPositive": "function isPositive(num) {\n // Your code here\n  return num > 0\n}",
        "containsSubstring": "function containsSubstring(mainString, subString) {\n // Your code here\n  return mainString.includes(subString)\n}",
        "stringLength": "function stringLength(str) {\n // Your code here\n  return str.length\n}",
        "toLowercase": "function toLowerCaseString(str) {\n // Your code here\n return str.toLowerCase()\n}",
        "countDown": "function countDown(nums) {\n // Your code here\n for (let i = nums; i >= 0; i--) {\nconsole.log(i)\n}\n}",
        "sumArray": "function sumArray(arr) {\n let result = 0;\n  // Your code here\n\n for(let i = 0; i < arr.length; i++) {\n let currentNumber = arr[i]\n result += currentNumber\n}\nreturn result;\n}",
        "fizzBuzz": "function fizzBuzz(arr) {\n  for (let i = 0; i < arr.length; i++) {\n let currentNumber = arr[i];\n // Your code here\n if (currentNumber % 15 === 0) {\n   console.log('Fizz Buzz');\n  } else if (currentNumber % 3 === 0) {\n   console.log('Fizz');\n  } else if (currentNumber % 5 === 0) {\n   console.log('Buzz');\n  } else {\n   console.log(currentNumber);\n  }\n }\n}",
        "maxNumber": "function maxNumber(arr) {\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    let currentNum = arr[i];\n    // Your code here\n    if (currentNum > max) {\n    max = currentNum;\n    } \n  } return max;\n}",
        "vowelCount":"function vowelCount(arr) {\n  let result = 0;\n  const vowels = ['a', 'e', 'i', 'o', 'u'];\n\n  for (let i = 0; i < str.length; i++) {\n    // Your code here\n    const letter =  str[i].toLowerCase();\n\n    if (vowels.indexOf(letter) !== -1) {\n      result += 1;\n    }\n  }\n   return result;\n}",
        "factorial":"function factorial(num) {\n  let result = 1;\n  // Your code here\n  for (let i = num; i > 1; i--) {\n    result = result * i;\n  }\n    return result;\n}",
        "characterCount": "function characterCount(str) {\n  let charMap = {};\n\n  for (let i = 0; i < str.length; i++) {\n  // Your code here\n    const char = str[i];\n    if (char in charMap) {\n       charMap[char]++;\n    } else {\n       charMap[char] = 1;\n    }\n  }\n  return charMap;\n}",
        "productOfLargestTwo":"function productOfLargestTwo(arr) {\n  let largest = null;\n  let secondLargest = null;\n\n  for (let i = 0; i < arr.length; i++) {\n    const currentNumber = arr[i];\n    // Your code here\n    if (currentNumber > largest || largest === null) {\n      secondLargest = largest;\n      largest = currentNumber;\n   } else if (currentNumber > secondLargest || secondLargest === null) {\n      secondLargest = currentNumber;\n    }\n  }\n  return largest * secondLargest;\n}",
        "linearSearch": "function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    // Your code here\n    const currentNumber = arr[i];\n    if (currentNumber === target) {\n      return i;\n    }\n  }\n  return -1;\n}",
        "isUnique":"function isUnique(arr) {\n  const numMap = {};\n\n  for (let i = 0; i < arr.length; i++) {\n    // Your code here\n    const currentNumber = arr[i];\n\n    if (numMap[currentNumber] === true) {\n      return false;\n    }\n    numMap[currentNumber] = true;\n  }\n  return true;\n}",
        "zeroesAndOnes":"function zeroesAndOnes(str) {\n  let zeroes = 0;\n  let ones = 0;\n\n for (let i = 0; i < str.length; i++) {\n    // Your code here\n    const num = str[i];;\n\n    if (num  === '0') {\n      zeroes++;\n    } else if (num === '1') {\n      ones++;\n    }\n  }\n  return zeroes === ones;\n}",
        "emptyString":"function isEmptyString(str) {\n  // Your code here\n  return str.length === 0\n};"
    };
}
module.exports= { getExpectedOutputs }