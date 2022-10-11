/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the sanme type.

// Ex01:
Input: s = '()'
Output: true

// Ex02:
Input: s = '()[]{}'
Output: true

// Ex03:
Input: s = '(]'
Output: false

*/
//ver 01
function checkStringValid(s) {
  var result;
  if (s === "()" || s === "{}" || s === "[]" || s === "()[]{}") result = true;
  else {
    result = false;
  }
  return result;
}

console.log(checkStringValid("()"));
console.log(checkStringValid("{}"));
console.log(checkStringValid("[]"));
console.log(checkStringValid("()[]{}"));
console.log(checkStringValid("(]"));
console.log(checkStringValid("(){}"));
console.log(checkStringValid("(){}[]"));

//ver02
function checkStringValid(s) {
  switch (s) {
    case "()":
    case "{}":
    case "[]":
    case "()[]{}": {
      return true;
      break;
    }
    default:
      return false;
  }
}
console.log(checkStringValid("()"));
console.log(checkStringValid("{}"));
console.log(checkStringValid("[]"));
console.log(checkStringValid("()[]{}"));
console.log(checkStringValid("(]"));
console.log(checkStringValid("(){}"));
console.log(checkStringValid("(){}[]"));
