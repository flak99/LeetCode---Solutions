/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // jeżeli to otwierający nawias
    if (!(ch in pairs)) {
      stack.push(ch);
    } else {
      // jeżeli to zamykający, sprawdzamy czy pasuje do ostatniego otwartego
      if (stack.length === 0 || stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  // jeśli stos jest pusty, wszystko się zgadza
  return stack.length === 0;
};

// @lc code=end
