//  Given a string s consisting of words and spces, return the length of the last word in the string.
//  A word is a maximal substring consisting of non-space characters only.

// js program for implementation of simple
// approach to find length of last word
 
 
function lengthOfLastWord(a)
{
    let len = 0;
 
    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
}
 
// Driver code
 
input = "Geeks For Geeks ";
document.write("The length of last word is "+ lengthOfLastWord(input));




// Given an array of integers nums and an integer target return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// ver 01
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (target - nums[i] === nums[j]) {
          return [i, j];
        }
      }
    }
  };

  // ver 02
  var twoSum = function (nums, target) {
    var a = [];
    for (var i = 0; i < nums.length; i++) {
      var n = nums[i];
  
      if (a[target - n] >= 0) {
        console.log(a[target - n]);
        return [a[target - n], i];
      } else {
        a[n] = i;
      }
    }
  };