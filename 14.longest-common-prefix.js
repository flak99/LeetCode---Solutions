/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = [];

  for (word in strs) {
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length; j++) {
        if (word[i] === word[j]) {
          prefix.push(word[i]);
        }
      }
    }
  }
};

// @lc code=end
