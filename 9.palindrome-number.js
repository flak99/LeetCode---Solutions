/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let stringX = x.toString();
  let pal = stringX.split("").reverse().join("");

  if (pal === stringX) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
