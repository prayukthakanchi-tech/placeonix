import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { computeReadiness } from '../utils/readiness.js'

// ── Judge0 language IDs ───────────────────────────────────────────
const LANGUAGES = [
  { id: 71,  name: 'Python',     ext: 'py',   color: '#3b82f6', icon: '🐍' },
  { id: 62,  name: 'Java',       ext: 'java', color: '#f97316', icon: '☕' },
  { id: 54,  name: 'C++',        ext: 'cpp',  color: '#8b5cf6', icon: '🔷' },
  { id: 63,  name: 'JavaScript', ext: 'js',   color: '#eab308', icon: '🟨' },
  { id: 50,  name: 'C',          ext: 'c',    color: '#6b7280', icon: '⚙️' },
]

const DIFFICULTY_META = {
  Easy:   { color: '#16a34a', bg: '#dcfce7', border: '#86efac' },
  Medium: { color: '#d97706', bg: '#fef3c7', border: '#fde68a' },
  Hard:   { color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
}

// ── Problem Bank with full per-language starter code ─────────────
const PROBLEMS = [
  {
    id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays',
    company: ['Amazon', 'TCS', 'Infosys'], acceptance: '72%', fnName: 'twoSum',
    description: `Given an array of integers **nums** and an integer **target**, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'nums[1] + nums[2] = 2 + 4 = 6' },
    ],
    constraints: ['2 ≤ nums.length ≤ 10⁴', '-10⁹ ≤ nums[i] ≤ 10⁹', 'Only one valid answer exists'],
    hints: ['Try using a hash map to store seen numbers', 'For each number, check if (target - number) exists in the map', 'Time complexity can be reduced to O(n)'],
    solution: `**Approach: Hash Map (O(n) time, O(n) space)**\n\nFor each element, store it in a hash map. For every new element, check if its complement (target - element) already exists in the map.\n\n**Key Insight:** Instead of checking all pairs (O(n²)), we look up the complement in O(1) using a hash map.\n\n**Algorithm:**\n1. Create an empty map\n2. For each index i and value nums[i]:\n   - complement = target - nums[i]\n   - If complement is in map → return [map[complement], i]\n   - Else → store map[nums[i]] = i`,
    starterCode: {
      71: `def twoSum(nums, target):
    # Use a hash map to store seen values
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# ── Tests ──
print(twoSum([2, 7, 11, 15], 9))   # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))        # Expected: [1, 2]
print(twoSum([3, 3], 6))           # Expected: [0, 1]`,
      62: `import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.twoSum(new int[]{2,7,11,15}, 9))); // [0, 1]
        System.out.println(Arrays.toString(sol.twoSum(new int[]{3,2,4}, 6)));     // [1, 2]
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) return {seen[complement], i};
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    auto r1 = twoSum(nums1, 9);
    cout << "[" << r1[0] << ", " << r1[1] << "]" << endl; // [0, 1]

    vector<int> nums2 = {3, 2, 4};
    auto r2 = twoSum(nums2, 6);
    cout << "[" << r2[0] << ", " << r2[1] << "]" << endl; // [1, 2]
    return 0;
}`,
      63: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) return [seen.get(complement), i];
        seen.set(nums[i], i);
    }
    return [];
}

// ── Tests ──
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]`,
      50: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int n, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    // O(n²) brute force for C (no built-in hash map)
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i; result[1] = j;
                return result;
            }
        }
    }
    return result;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int size;
    int* r = twoSum(nums, 4, 9, &size);
    printf("[%d, %d]\n", r[0], r[1]); // [0, 1]
    free(r);
    return 0;
}`,
    },
  },
  {
    id: 2, title: 'Reverse a String', difficulty: 'Easy', category: 'Strings',
    company: ['TCS', 'Wipro', 'Cognizant'], acceptance: '85%', fnName: 'reverseString',
    description: `Write a function that reverses a string. The input string is given as an array of characters.\n\nYou must do this by modifying the input array **in-place** with O(1) extra memory.`,
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁵', 's[i] is a printable ASCII character'],
    hints: ['Use two pointers — one from start, one from end', 'Swap characters and move pointers toward center', 'No extra array needed — swap in-place'],
    solution: `**Approach: Two Pointers (O(n) time, O(1) space)**\n\nPlace one pointer at the start and another at the end. Swap the characters and move both pointers inward until they meet.\n\n**Algorithm:**\n1. left = 0, right = len(s) - 1\n2. While left < right:\n   - Swap s[left] and s[right]\n   - left++, right--`,
    starterCode: {
      71: `def reverseString(s):
    # Two-pointer in-place reversal
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

# ── Tests ──
s1 = ["h","e","l","l","o"]
reverseString(s1)
print(s1)  # ['o', 'l', 'l', 'e', 'h']

s2 = ["H","a","n","n","a","h"]
reverseString(s2)
print(s2)  # ['h', 'a', 'n', 'n', 'a', 'H']`,
      62: `import java.util.Arrays;

public class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        char[] s = {'h','e','l','l','o'};
        sol.reverseString(s);
        System.out.println(Arrays.toString(s)); // [o, l, l, e, h]
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        swap(s[left++], s[right--]);
    }
}

int main() {
    vector<char> s = {'h','e','l','l','o'};
    reverseString(s);
    for (char c : s) cout << c;
    cout << endl; // olleh
    return 0;
}`,
      63: `/**
 * @param {character[]} s
 * @return {void} (modifies in-place)
 */
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++; right--;
    }
}

// ── Tests ──
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // ['o','l','l','e','h']`,
      50: `#include <stdio.h>

void reverseString(char* s, int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        char tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}

int main() {
    char s[] = {'h','e','l','l','o','\0'};
    reverseString(s, 5);
    printf("%s\n", s); // olleh
    return 0;
}`,
    },
  },
  {
    id: 3, title: 'Find Maximum in Array', difficulty: 'Easy', category: 'Arrays',
    company: ['TCS', 'Infosys', 'Wipro'], acceptance: '90%', fnName: 'findMax',
    description: `Given an integer array **nums**, return the maximum element in the array.\n\nTry to solve it in O(n) time and O(1) space.`,
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]', output: '9' },
      { input: 'nums = [-1, -5, -3]', output: '-1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁵', '-10⁹ ≤ nums[i] ≤ 10⁹'],
    hints: ['Start with the first element as max', 'Iterate through the array updating max if current > max'],
    solution: `**Approach: Linear Scan (O(n) time, O(1) space)**\n\nInitialize max as the first element. Iterate through the rest and update max whenever a larger value is found.\n\nThis is the most efficient possible — we must look at every element at least once.`,
    starterCode: {
      71: `def findMax(nums):
    max_val = nums[0]
    for num in nums[1:]:
        if num > max_val:
            max_val = num
    return max_val

# ── Tests ──
print(findMax([3, 1, 4, 1, 5, 9, 2, 6]))  # 9
print(findMax([-1, -5, -3]))               # -1
print(findMax([42]))                        # 42`,
      62: `public class Solution {
    public int findMax(int[] nums) {
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) max = nums[i];
        }
        return max;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.findMax(new int[]{3,1,4,1,5,9,2,6})); // 9
        System.out.println(sol.findMax(new int[]{-1,-5,-3}));         // -1
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

int findMax(vector<int>& nums) {
    int maxVal = nums[0];
    for (int i = 1; i < (int)nums.size(); i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    return maxVal;
    // Or simply: return *max_element(nums.begin(), nums.end());
}

int main() {
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,
      63: `/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
    // Alternatively: return Math.max(...nums);
}

// ── Tests ──
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6])); // 9
console.log(findMax([-1, -5, -3]));               // -1`,
      50: `#include <stdio.h>

int findMax(int* nums, int n) {
    int max = nums[0];
    for (int i = 1; i < n; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9, 2, 6};
    printf("%d\n", findMax(nums, 8)); // 9
    return 0;
}`,
    },
  },
  {
    id: 4, title: 'Check Palindrome', difficulty: 'Easy', category: 'Strings',
    company: ['Accenture', 'Cognizant', 'TCS'], acceptance: '82%', fnName: 'isPalindrome',
    description: `Given a string **s**, return **true** if it is a palindrome, or **false** otherwise.\n\nA string is a palindrome when it reads the same forward and backward. Consider only alphanumeric characters and ignore case.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome' },
      { input: 's = "race a car"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 2 × 10⁵', 's consists only of printable ASCII characters'],
    hints: ['Clean the string first — remove non-alphanumeric chars and lowercase', 'Compare with its reverse, or use two pointers from both ends'],
    solution: `**Approach: Two Pointers (O(n) time, O(1) space)**\n\nSkip non-alphanumeric characters with two pointers and compare characters in-place without creating a new string.\n\n**Algorithm:**\n1. left = 0, right = len(s) - 1\n2. Skip non-alphanumeric on both sides\n3. Compare s[left].lower() == s[right].lower()\n4. If mismatch → return False`,
    starterCode: {
      71: `def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        # Skip non-alphanumeric characters
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

# ── Tests ──
print(isPalindrome("A man, a plan, a canal: Panama"))  # True
print(isPalindrome("race a car"))                       # False
print(isPalindrome(" "))                                # True`,
      62: `public class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right)))
                return false;
            left++; right--;
        }
        return true;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(sol.isPalindrome("race a car")); // false
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++; right--;
    }
    return true;
}

int main() {
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // 1
    cout << isPalindrome("race a car") << endl;                      // 0
    return 0;
}`,
      63: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++; right--;
    }
    return true;
}

// ── Tests ──
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`,
      50: `#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s) {
    int left = 0, right = strlen(s) - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++; right--;
    }
    return true;
}

int main() {
    printf("%s\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false"); // true
    printf("%s\n", isPalindrome("race a car") ? "true" : "false"); // false
    return 0;
}`,
    },
  },
  {
    id: 5, title: 'Fibonacci Number', difficulty: 'Easy', category: 'Recursion / DP',
    company: ['TCS', 'Wipro', 'Infosys'], acceptance: '88%', fnName: 'fib',
    description: `The **Fibonacci numbers** form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.\n\nGiven **n**, calculate **F(n)**. Implement it iteratively for O(n) time and O(1) space.`,
    examples: [
      { input: 'n = 4', output: '3', explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3' },
      { input: 'n = 10', output: '55' },
    ],
    constraints: ['0 ≤ n ≤ 30'],
    hints: ['Start with base cases: fib(0)=0, fib(1)=1', 'Iterative approach only needs two variables (a, b)', 'Recursive is elegant but O(2ⁿ) — avoid it'],
    solution: `**Approach: Iterative (O(n) time, O(1) space)**\n\nKeep only the last two Fibonacci values and update them in a loop.\n\n**F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)**\n\nAvoid recursion — it recalculates the same subproblems exponentially.`,
    starterCode: {
      71: `def fib(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# ── Tests ──
print(fib(0))   # 0
print(fib(1))   # 1
print(fib(4))   # 3
print(fib(10))  # 55`,
      62: `public class Solution {
    public int fib(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.fib(4));   // 3
        System.out.println(sol.fib(10));  // 55
    }
}`,
      54: `#include <iostream>
using namespace std;

int fib(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b; b = temp;
    }
    return b;
}

int main() {
    cout << fib(4)  << endl;  // 3
    cout << fib(10) << endl;  // 55
    return 0;
}`,
      63: `/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// ── Tests ──
console.log(fib(4));   // 3
console.log(fib(10));  // 55`,
      50: `#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b; b = temp;
    }
    return b;
}

int main() {
    printf("%d\n", fib(4));   // 3
    printf("%d\n", fib(10));  // 55
    return 0;
}`,
    },
  },
  {
    id: 6, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Strings / Sliding Window',
    company: ['Amazon', 'Accenture', 'Google'], acceptance: '58%', fnName: 'lengthOfLongestSubstring',
    description: `Given a string **s**, find the length of the **longest substring** without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: '"abc" is the longest substring without repeating chars' },
      { input: 's = "bbbbb"', output: '1' },
      { input: 's = "pwwkew"', output: '3', explanation: '"wke" is the longest' },
    ],
    constraints: ['0 ≤ s.length ≤ 5 × 10⁴', 's consists of English letters, digits, symbols, spaces'],
    hints: ['Use a sliding window with two pointers (left, right)', 'Use a Set to track characters in current window', 'When a duplicate is found, shrink window from the left'],
    solution: `**Approach: Sliding Window + Hash Set (O(n) time, O(min(m,n)) space)**\n\nMaintain a window [left, right]. Expand right; when a duplicate is found, shrink from left until the duplicate is removed.\n\nTrack the maximum window size throughout.`,
    starterCode: {
      71: `def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        # Shrink window until no duplicate
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# ── Tests ──
print(lengthOfLongestSubstring("abcabcbb"))  # 3
print(lengthOfLongestSubstring("bbbbb"))     # 1
print(lengthOfLongestSubstring("pwwkew"))    # 3`,
      62: `import java.util.HashSet;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left++));
            }
            set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));   // 3
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> window;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        while (window.count(s[right])) {
            window.erase(s[left++]);
        }
        window.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // 3
    cout << lengthOfLongestSubstring("pwwkew")   << endl; // 3
    return 0;
}`,
      63: `/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const window = new Set();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        while (window.has(s[right])) {
            window.delete(s[left++]);
        }
        window.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// ── Tests ──
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew"));   // 3`,
      50: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int freq[128] = {0};
    int left = 0, maxLen = 0, n = strlen(s);
    for (int right = 0; right < n; right++) {
        freq[(int)s[right]]++;
        while (freq[(int)s[right]] > 1) {
            freq[(int)s[left++]]--;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    printf("%d\n", lengthOfLongestSubstring("abcabcbb")); // 3
    printf("%d\n", lengthOfLongestSubstring("pwwkew"));   // 3
    return 0;
}`,
    },
  },
  {
    id: 7, title: 'Valid Parentheses', difficulty: 'Medium', category: 'Stack',
    company: ['Amazon', 'Google', 'Cognizant'], acceptance: '64%', fnName: 'isValid',
    description: `Given a string **s** containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n- Open brackets must be closed by the same type\n- Open brackets must be closed in the correct order\n- Every close bracket has a corresponding open bracket`,
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁴', 's consists of parentheses only'],
    hints: ['Use a stack — push open brackets, pop on closing', 'Map each closing bracket to its opening pair', 'At the end, the stack must be empty'],
    solution: `**Approach: Stack (O(n) time, O(n) space)**\n\nPush every opening bracket. On a closing bracket, check if the top of the stack matches. If not → invalid. At the end, the stack must be empty.\n\n**Matching pairs:** ')' → '(', ']' → '[', '}' → '{'`,
    starterCode: {
      71: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

# ── Tests ──
print(isValid("()"))      # True
print(isValid("()[]{}"))  # True
print(isValid("(]"))      # False
print(isValid("([)]"))    # False`,
      62: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c==')' && top!='(') || (c=='}' && top!='{') || (c==']' && top!='['))
                    return false;
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isValid("()[]{}")); // true
        System.out.println(sol.isValid("(]"));     // false
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    unordered_map<char,char> map = {{')','{'},{')','{'},{')','{'}};
    // correct map:
    map = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (map.count(c)) {
            if (st.empty() || st.top() != map[c]) return false;
            st.pop();
        } else st.push(c);
    }
    return st.empty();
}

int main() {
    cout << isValid("()[]{}") << endl; // 1
    cout << isValid("(]")     << endl; // 0
    return 0;
}`,
      63: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (map[c]) {
            if (stack.pop() !== map[c]) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}

// ── Tests ──
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false`,
      50: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    int n = strlen(s);
    char stack[n + 1]; int top = -1;
    for (int i = 0; s[i]; i++) {
        char c = s[i];
        if (c=='(' || c=='{' || c=='[') stack[++top] = c;
        else {
            if (top < 0) return false;
            char t = stack[top--];
            if ((c==')' && t!='(') || (c=='}' && t!='{') || (c==']' && t!='['))
                return false;
        }
    }
    return top == -1;
}

int main() {
    printf("%s\n", isValid("()[]{}") ? "true":"false"); // true
    printf("%s\n", isValid("(]")     ? "true":"false"); // false
    return 0;
}`,
    },
  },
  {
    id: 8, title: 'Binary Search', difficulty: 'Medium', category: 'Binary Search',
    company: ['TCS', 'Amazon', 'Infosys'], acceptance: '61%', fnName: 'search',
    description: `Given an array of integers **nums** sorted in ascending order, and an integer **target**, write a function to search target in nums.\n\nIf target exists, return its index. Otherwise, return **-1**.\n\nYou must write an algorithm with **O(log n)** runtime complexity.`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁴', 'All values unique', 'Array sorted ascending'],
    hints: ['Maintain left and right boundaries', 'Calculate mid = left + (right - left) // 2', 'If nums[mid] < target → move left up; else → move right down'],
    solution: `**Approach: Classic Binary Search (O(log n) time, O(1) space)**\n\nRepeatedly halve the search space by comparing the middle element with the target.\n\n**Why mid = left + (right-left)//2 instead of (left+right)//2?**\nTo avoid integer overflow when left and right are large.`,
    starterCode: {
      71: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# ── Tests ──
print(search([-1, 0, 3, 5, 9, 12], 9))   # 4
print(search([-1, 0, 3, 5, 9, 12], 2))   # -1`,
      62: `public class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.search(new int[]{-1,0,3,5,9,12}, 9)); // 4
        System.out.println(sol.search(new int[]{-1,0,3,5,9,12}, 2)); // -1
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {-1, 0, 3, 5, 9, 12};
    cout << search(nums, 9) << endl;  // 4
    cout << search(nums, 2) << endl;  // -1
    return 0;
}`,
      63: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// ── Tests ──
console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1`,
      50: `#include <stdio.h>

int search(int* nums, int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int nums[] = {-1, 0, 3, 5, 9, 12};
    printf("%d\n", search(nums, 6, 9));  // 4
    printf("%d\n", search(nums, 6, 2));  // -1
    return 0;
}`,
    },
  },
  {
    id: 9, title: 'Merge Two Sorted Lists', difficulty: 'Medium', category: 'Linked List',
    company: ['Amazon', 'Accenture', 'TCS'], acceptance: '55%', fnName: 'mergeTwoLists',
    description: `You are given the heads of two sorted linked lists **list1** and **list2**.\n\nMerge the two lists into one sorted list made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.`,
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: ['0 ≤ nodes ≤ 50', '-100 ≤ Node.val ≤ 100', 'Both lists sorted'],
    hints: ['Use a dummy head node to simplify edge cases', 'Compare the heads of both lists and attach the smaller one', 'After the loop, attach whichever list still has remaining nodes'],
    solution: `**Approach: Iterative with Dummy Node (O(m+n) time, O(1) space)**\n\nCreate a dummy node as the start. Keep a current pointer and greedily pick the smaller node from either list. Append remaining nodes at the end.`,
    starterCode: {
      71: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    curr = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
    curr.next = list1 or list2
    return dummy.next

# ── Helper ──
def build(vals):
    dummy = ListNode(0); curr = dummy
    for v in vals: curr.next = ListNode(v); curr = curr.next
    return dummy.next

def to_list(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res

# ── Tests ──
print(to_list(mergeTwoLists(build([1,2,4]), build([1,3,4]))))  # [1,1,2,3,4,4]`,
      62: `public class Solution {
    static class ListNode {
        int val; ListNode next;
        ListNode(int v) { val = v; }
    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), curr = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
            else { curr.next = l2; l2 = l2.next; }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static void main(String[] args) {
        // Build 1->2->4 and 1->3->4, merge
        System.out.println("See implementation above");
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

struct ListNode { int val; ListNode* next; ListNode(int v):val(v),next(nullptr){} };

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0); ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    // Build lists and test
    ListNode* l1 = new ListNode(1); l1->next = new ListNode(2); l1->next->next = new ListNode(4);
    ListNode* l2 = new ListNode(1); l2->next = new ListNode(3); l2->next->next = new ListNode(4);
    ListNode* merged = mergeTwoLists(l1, l2);
    while (merged) { cout << merged->val << " "; merged = merged->next; }
    cout << endl; // 1 1 2 3 4 4
    return 0;
}`,
      63: `class ListNode {
    constructor(val = 0, next = null) { this.val = val; this.next = next; }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}

// ── Helper ──
const build = vals => { const d = new ListNode(); let c = d; vals.forEach(v => { c.next = new ListNode(v); c = c.next; }); return d.next; }
const toArr = n => { const r = []; while(n){r.push(n.val);n=n.next;} return r; }

console.log(toArr(mergeTwoLists(build([1,2,4]), build([1,3,4])))); // [1,1,2,3,4,4]`,
      50: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node { int val; struct Node* next; } ListNode;
ListNode* newNode(int v) { ListNode* n = malloc(sizeof(ListNode)); n->val=v; n->next=NULL; return n; }

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy; dummy.next=NULL; ListNode* curr=&dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next=l1; l1=l1->next; }
        else { curr->next=l2; l2=l2->next; }
        curr=curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    ListNode *l1=newNode(1); l1->next=newNode(2); l1->next->next=newNode(4);
    ListNode *l2=newNode(1); l2->next=newNode(3); l2->next->next=newNode(4);
    ListNode *m=mergeTwoLists(l1,l2);
    while(m){printf("%d ",m->val);m=m->next;}
    printf("\n"); // 1 1 2 3 4 4
    return 0;
}`,
    },
  },
  {
    id: 10, title: 'Trapping Rain Water', difficulty: 'Hard', category: 'Arrays / Two Pointer',
    company: ['Amazon', 'Google'], acceptance: '42%', fnName: 'trap',
    description: `Given **n** non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '6 units of rain water are trapped' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    constraints: ['n == height.length', '1 ≤ n ≤ 2 × 10⁴', '0 ≤ height[i] ≤ 10⁵'],
    hints: ['For each position, water = min(maxLeft, maxRight) - height[i]', 'Two-pointer O(n) is optimal', 'Move the pointer with the smaller max-height inward'],
    solution: `**Approach: Two Pointers (O(n) time, O(1) space)**\n\nMaintain left/right pointers and their respective max heights. The pointer with the smaller max determines the water level.\n\nWater at position = min(maxLeft, maxRight) - height[i]`,
    starterCode: {
      71: `def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water

# ── Tests ──
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6
print(trap([4,2,0,3,2,5]))               # 9`,
      62: `public class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0, water = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else water += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else water += rightMax - height[right];
                right--;
            }
        }
        return water;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // 6
        System.out.println(sol.trap(new int[]{4,2,0,3,2,5}));              // 9
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

int main() {
    vector<int> h = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(h) << endl; // 6
    return 0;
}`,
      63: `/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

// ── Tests ──
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5]));               // 9`,
      50: `#include <stdio.h>

int trap(int* height, int n) {
    int left = 0, right = n - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

int main() {
    int h[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    printf("%d\n", trap(h, 12)); // 6
    return 0;
}`,
    },
  },
  {
    id: 11, title: 'Longest Palindromic Substring', difficulty: 'Hard', category: 'DP / Strings',
    company: ['Amazon', 'Google', 'Microsoft'], acceptance: '38%', fnName: 'longestPalindrome',
    description: `Given a string **s**, return the **longest palindromic substring** in s.`,
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also valid' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ['1 ≤ s.length ≤ 1000', 's consists of digits and English letters'],
    hints: ['Try expand-around-center approach', 'For each character, expand outward while palindrome holds', 'Handle both odd-length and even-length centers'],
    solution: `**Approach: Expand Around Center (O(n²) time, O(1) space)**\n\nFor each character (and pair), expand outward as long as characters match. Track the longest palindrome found.\n\n**Two center types:**\n- Odd length: expand from single character "aba"\n- Even length: expand from pair "bb"`,
    starterCode: {
      71: `def longestPalindrome(s):
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]  # slice of valid palindrome

    result = ""
    for i in range(len(s)):
        odd  = expand(i, i)       # odd length
        even = expand(i, i + 1)   # even length
        result = max(result, odd, even, key=len)
    return result

# ── Tests ──
print(longestPalindrome("babad"))  # "bab" or "aba"
print(longestPalindrome("cbbd"))   # "bb"
print(longestPalindrome("a"))      # "a"`,
      62: `public class Solution {
    private String expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--; right++;
        }
        return s.substring(left + 1, right);
    }

    public String longestPalindrome(String s) {
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            String odd  = expand(s, i, i);
            String even = expand(s, i, i + 1);
            if (odd.length()  > result.length()) result = odd;
            if (even.length() > result.length()) result = even;
        }
        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestPalindrome("babad")); // bab
        System.out.println(sol.longestPalindrome("cbbd"));  // bb
    }
}`,
      54: `#include <bits/stdc++.h>
using namespace std;

string longestPalindrome(string s) {
    int n = s.size(), start = 0, maxLen = 1;
    auto expand = [&](int l, int r) {
        while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }
        if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }
    };
    for (int i = 0; i < n; i++) {
        expand(i, i);     // odd
        expand(i, i + 1); // even
    }
    return s.substr(start, maxLen);
}

int main() {
    cout << longestPalindrome("babad") << endl; // bab
    cout << longestPalindrome("cbbd")  << endl; // bb
    return 0;
}`,
      63: `/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let result = "";
    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++;
        }
        return s.slice(left + 1, right);
    }
    for (let i = 0; i < s.length; i++) {
        const odd  = expand(i, i);
        const even = expand(i, i + 1);
        const longer = odd.length > even.length ? odd : even;
        if (longer.length > result.length) result = longer;
    }
    return result;
}

// ── Tests ──
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd"));  // "bb"`,
      50: `#include <stdio.h>
#include <string.h>

char result[1001];

void expand(char* s, int n, int l, int r) {
    while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }
    int len = r - l - 1;
    if (len > (int)strlen(result)) {
        strncpy(result, s + l + 1, len);
        result[len] = '\0';
    }
}

char* longestPalindrome(char* s) {
    int n = strlen(s);
    result[0] = s[0]; result[1] = '\0';
    for (int i = 0; i < n; i++) {
        expand(s, n, i, i);     // odd
        expand(s, n, i, i + 1); // even
    }
    return result;
}

int main() {
    printf("%s\n", longestPalindrome("babad")); // bab
    printf("%s\n", longestPalindrome("cbbd"));  // bb
    return 0;
}`,
    },
  },
]



// ── Piston API runner (free, no key required) ─────────────────────
const WANDBOX_LANGS = {
  71: { compiler: 'cpython-3.13.8' },
  62: { compiler: 'openjdk-jdk-22+36' },
  54: { compiler: 'gcc-13.2.0' },
  63: { compiler: 'nodejs-20.17.0' },
  50: { compiler: 'gcc-13.2.0-c' },
}

// ── AI fallback: simulate execution via Gemini ────────────────
async function runCodeAI(sourceCode, languageId) {
  const langNames = { 71: 'Python 3', 62: 'Java', 54: 'C++', 63: 'JavaScript', 50: 'C' }
  const langName = langNames[languageId] || 'unknown language'
  const prompt = `You are a secure, sandboxed code interpreter. Execute the following ${langName} code and respond ONLY with a JSON object in this exact format: {"success":true,"output":"<stdout>","type":"stdout"} or {"success":false,"output":"<error message>","type":"Runtime Error"}. Do not include markdown, explanation, or any text outside the JSON object.\n\nCode:\n${sourceCode}`
  try {
    // Try server proxy first
    const proxyRes = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt }),
    })
    if (proxyRes.ok) {
      const d = await proxyRes.json()
      const raw = (d.response || d.candidates?.[0]?.content?.parts?.[0]?.text || d.reply || d.message || '').trim()
      const jsonStr = raw.replace(/^```json\s*/,'').replace(/```\s*$/,'').trim()
      return JSON.parse(jsonStr)
    }
  } catch (_) {}

  // Instant local JS execution fallback for JavaScript (Language ID 63)
  if (languageId === 63) {
    try {
      const logs = []
      const customConsole = { log: (...args) => logs.push(args.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) }
      // eslint-disable-next-line no-new-func
      new Function('console', sourceCode)(customConsole)
      return { success: true, output: logs.join('\n') || '(no output)' }
    } catch (jsErr) {
      return { success: false, output: jsErr.message, type: 'Runtime Error' }
    }
  }

  return { success: false, output: '⚠️ Compiler server is busy. Please try again in a moment.', type: 'Error' }
}

async function runCode(sourceCode, languageId, retries = 3) {
  const langConfig = WANDBOX_LANGS[languageId]
  if (!langConfig) return { success: false, output: 'Language not supported', type: 'Error' }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: langConfig.compiler,
          code: sourceCode,
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      const data = await res.json()

      // Compile error
      if (data.compiler_error || (data.status != 0 && !data.program_message)) {
        const compileOut = (data.compiler_error || data.compiler_message || 'Compile error').trim()
        if (compileOut.includes('Resource temporarily unavailable') && attempt < retries) {
          await new Promise(r => setTimeout(r, 1200))
          continue
        }
        if (compileOut) return { success: false, output: compileOut, type: 'Compile Error' }
      }

      const stdout = (data.program_output || '').trim()
      const stderr = (data.program_error || '').trim()

      if (stderr.includes('Resource temporarily unavailable') && attempt < retries) {
        await new Promise(r => setTimeout(r, 1200))
        continue
      }

      if (data.status != 0 && stderr) {
        return { success: false, output: stderr, type: 'Runtime Error' }
      }

      return {
        success: true,
        output: stdout || stderr || '(no output)',
      }
    } catch (err) {
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 1200))
        continue
      }
      // All retries exhausted — fall back to AI interpreter
      return runCodeAI(sourceCode, languageId)
    }
  }
  // Fallback if loop exits without returning
  return runCodeAI(sourceCode, languageId)
}

// ── Subcomponents ─────────────────────────────────────────────────
function DiffBadge({ difficulty, small }) {
  const m = DIFFICULTY_META[difficulty]
  return (
    <span style={{ fontSize: small ? 10 : 12, fontWeight: 700, color: m.color, background: m.bg, border: `1px solid ${m.border}`, padding: small ? '2px 7px' : '3px 10px', borderRadius: 999 }}>
      {difficulty}
    </span>
  )
}

function ProblemList({ problems, selected, onSelect, filter, setFilter, search, setSearch, solved }) {
  const filtered = problems.filter(p => {
    const diffOk = filter.diff === 'All' || p.difficulty === filter.diff
    const srchOk = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
    return diffOk && srchOk
  })

  const solvedCount = problems.filter(p => solved.has(p.id)).length

  return (
    <div style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--card-border)', background: '#fafafa' }}>
        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 8 }}>
          <span style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: '#9ca3af' }}>🔍</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)} placeholder="Search problems..."
            style={{ width: '100%', padding: '7px 10px 7px 30px', border: '1.5px solid var(--card-border)', borderRadius: 8, fontSize: 12.5, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
            onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>

        {/* Difficulty filter */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 6 }}>
          {['All', 'Easy', 'Medium', 'Hard'].map(d => (
            <button key={d} onClick={() => setFilter(f => ({ ...f, diff: d }))}
              style={{ flex: 1, padding: '4px 2px', borderRadius: 7, border: '1.5px solid', cursor: 'pointer', fontFamily: 'inherit', fontSize: 10.5, fontWeight: 700, transition: 'all 0.15s',
                borderColor: filter.diff === d ? (DIFFICULTY_META[d]?.border || 'var(--purple-primary)') : 'var(--card-border)',
                background:  filter.diff === d ? (DIFFICULTY_META[d]?.bg    || 'var(--purple-xsoft)')   : '#fff',
                color:       filter.diff === d ? (DIFFICULTY_META[d]?.color  || 'var(--purple-primary)') : 'var(--text-muted)',
              }}>
              {d}
            </button>
          ))}
        </div>


      </div>

      {/* Progress bar */}
      <div style={{ padding: '8px 14px', borderBottom: '1px solid var(--card-border)', background: '#f9fafb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>Progress</span>
          <span style={{ fontSize: 11, color: 'var(--purple-primary)', fontWeight: 700 }}>{solvedCount} / {problems.length}</span>
        </div>
        <div style={{ height: 5, borderRadius: 999, background: '#e5e7eb', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${Math.min(100, (solvedCount / 10) * 100)}%`, background: 'linear-gradient(90deg, #7c3aed, #6366f1)', borderRadius: 999, transition: 'width 0.4s ease' }} />
        </div>
      </div>

      {/* Problem list */}
      <div className="responsive-list-height">
        {filtered.length === 0
          ? <div style={{ padding: '28px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>No problems match filters</div>
          : filtered.map(p => {
            const isSolved = solved.has(p.id)
            const isActive = selected?.id === p.id
            return (
              <div key={p.id} onClick={() => onSelect(p)}
                style={{ padding: '11px 14px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', transition: 'all 0.15s',
                  background: isActive ? 'var(--purple-xsoft)' : '#fff',
                  borderLeft: `3px solid ${isActive ? 'var(--purple-primary)' : 'transparent'}`,
                  boxShadow: isActive ? 'inset 0 0 0 1px rgba(109,40,217,0.08)' : 'none',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f9fafb' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = '#fff' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? 'var(--purple-primary)' : 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 5 }}>
                    {isSolved ? <span title="Solved" style={{ color: '#16a34a' }}>✅</span> : <span style={{ color: '#d1d5db', fontSize: 11 }}>○</span>}
                    {p.id}. {p.title}
                  </span>
                  <DiffBadge difficulty={p.difficulty} small />
                </div>
                <div style={{ display: 'flex', gap: 5, alignItems: 'center', paddingLeft: 18 }}>
                  <span style={{ fontSize: 10.5, color: 'var(--text-muted)', background: '#f3f4f6', padding: '1px 6px', borderRadius: 999 }}>{p.category.split(' / ')[0]}</span>
                  <span style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{p.acceptance} acceptance</span>
                </div>
              </div>
            )
          })
        }
      </div>

      <div style={{ padding: '8px 14px', borderTop: '1px solid var(--card-border)', background: '#fafafa' }}>
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{filtered.length} / {problems.length} shown</span>
      </div>
    </div>
  )
}

function ProblemPanel({ problem, activeTab, setActiveTab, onMarkSolved, isSolved }) {
  const [revealedHints, setRevealedHints] = useState([])

  useEffect(() => setRevealedHints([]), [problem.id])

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff', overflow: 'hidden' }}>
      {/* Problem header */}
      <div style={{ padding: '18px 20px 12px', borderBottom: '1px solid var(--card-border)', flexShrink: 0 }}>
        <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: 'var(--text-primary)', marginBottom: 8 }}>
          {problem.id}. {problem.title}
        </h2>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <DiffBadge difficulty={problem.difficulty} />
          <span style={{ fontSize: 11.5, color: 'var(--text-secondary)', background: '#f3f4f6', padding: '2px 8px', borderRadius: 999, fontWeight: 600 }}>{problem.category}</span>
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-muted)' }}>✅ {problem.acceptance}</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginTop: 12, borderRadius: 8, overflow: 'hidden', border: '1.5px solid var(--card-border)', width: 'fit-content' }}>
          {['Description', 'Solution', 'Hints'].map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ padding: '5px 14px', border: 'none', background: activeTab === tab ? 'var(--purple-primary)' : '#f9fafb', color: activeTab === tab ? '#fff' : 'var(--text-muted)', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', borderLeft: i > 0 ? '1px solid var(--card-border)' : 'none', transition: 'all 0.15s' }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        {activeTab === 'Description' && (
          <>
            <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 18 }}
              dangerouslySetInnerHTML={{ __html: problem.description.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>').replace(/\n/g, '<br/>') }}
            />
            <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'Urbanist, sans-serif' }}>Examples</div>
            {problem.examples.map((ex, i) => (
              <div key={i} style={{ background: '#f9fafb', border: '1px solid var(--card-border)', borderRadius: 10, padding: '12px 14px', marginBottom: 10, fontFamily: 'monospace' }}>
                <div style={{ fontSize: 12.5, marginBottom: 3 }}><span style={{ color: 'var(--text-muted)' }}>Input: </span><strong>{ex.input}</strong></div>
                <div style={{ fontSize: 12.5, marginBottom: ex.explanation ? 3 : 0 }}><span style={{ color: 'var(--text-muted)' }}>Output: </span><strong>{ex.output}</strong></div>
                {ex.explanation && <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>💬 {ex.explanation}</div>}
              </div>
            ))}
            <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--text-primary)', margin: '16px 0 8px', fontFamily: 'Urbanist, sans-serif' }}>Constraints</div>
            {problem.constraints.map((c, i) => (
              <div key={i} style={{ fontSize: 12.5, color: 'var(--text-secondary)', display: 'flex', gap: 7, marginBottom: 4, alignItems: 'center' }}>
                <span style={{ color: 'var(--purple-primary)', fontWeight: 700 }}>•</span>
                <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 4 }}>{c}</code>
              </div>
            ))}
          </>
        )}

        {activeTab === 'Solution' && (
          <div>
            <div style={{ background: 'linear-gradient(135deg, var(--purple-xsoft), #ede9fe)', border: '1.5px solid #c4b5fd', borderRadius: 10, padding: '14px 16px', marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: '#7c3aed', fontWeight: 700, marginBottom: 4 }}>💡 Approach & Explanation</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.85, whiteSpace: 'pre-line' }}
                dangerouslySetInnerHTML={{ __html: problem.solution.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>') }}
              />
            </div>
          </div>
        )}

        {activeTab === 'Hints' && (
          <div>
            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 14 }}>Reveal hints one at a time. Try to solve without them first!</p>
            {problem.hints.map((h, i) => {
              const revealed = revealedHints.includes(i)
              return (
                <div key={i} style={{ marginBottom: 10, borderRadius: 10, border: '1.5px solid', borderColor: revealed ? '#c4b5fd' : 'var(--card-border)', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                  <button onClick={() => setRevealedHints(r => revealed ? r.filter(x => x !== i) : [...r, i])}
                    style={{ width: '100%', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, background: revealed ? 'var(--purple-xsoft)' : '#f9fafb', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                    <span style={{ width: 22, height: 22, borderRadius: 999, background: revealed ? 'var(--purple-primary)' : '#e5e7eb', color: revealed ? '#fff' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: revealed ? 'var(--purple-primary)' : 'var(--text-muted)' }}>
                      {revealed ? 'Hint ' + (i + 1) : `Hint ${i + 1} — click to reveal`}
                    </span>
                    <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)' }}>{revealed ? '▲' : '▼'}</span>
                  </button>
                  {revealed && (
                    <div style={{ padding: '10px 14px 12px 46px', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, borderTop: '1px solid #e9d5ff', background: '#fff' }}>
                      {h}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Mark solved */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid var(--card-border)', background: '#fafafa', flexShrink: 0 }}>
        <button onClick={onMarkSolved}
          style={{ width: '100%', padding: '8px', borderRadius: 9, border: `1.5px solid ${isSolved ? '#86efac' : 'var(--card-border)'}`, background: isSolved ? '#dcfce7' : '#fff', color: isSolved ? '#16a34a' : 'var(--text-muted)', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}>
          {isSolved ? '✅ Marked as Solved — click to undo' : '○ Mark as Solved'}
        </button>
      </div>
    </div>
  )
}

function CodeEditor({ problem, lang, setLang, code, setCode, output, running, onRun, onReset, analyzing, onAnalyze }) {
  const lineCount = code.split('\n').length
  const lineNumRef = useRef(null)
  const textareaRef = useRef(null)
  const [outputHeight, setOutputHeight] = useState(150)
  const dragRef = useRef(null)

  // Sync line number scroll with textarea scroll
  const syncScroll = useCallback(() => {
    if (lineNumRef.current && textareaRef.current) {
      lineNumRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }, [])

  // Ctrl+Enter to run
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = e.target.selectionStart
      const val = code.substring(0, s) + '  ' + code.substring(e.target.selectionEnd)
      setCode(val)
      setTimeout(() => e.target.setSelectionRange(s + 2, s + 2), 0)
    }
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault()
      onRun()
    }
  }, [code, setCode, onRun])

  // Drag to resize output panel
  const startDrag = useCallback((e) => {
    e.preventDefault()
    const startY = e.clientY
    const startH = outputHeight
    const onMove = (ev) => {
      const delta = startY - ev.clientY
      setOutputHeight(Math.max(80, Math.min(320, startH + delta)))}
    const onUp = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp) }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [outputHeight])

  const currentLang = LANGUAGES.find(l => l.id === lang)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e1e2e', borderRadius: 16, overflow: 'hidden', border: '1.5px solid #2d2d3f' }}>
      {/* Toolbar */}
      <div className="responsive-toolbar">
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28ca41'].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />)}
        </div>
        <span style={{ fontSize: 11.5, color: '#6b7280', fontFamily: 'monospace', marginLeft: 4 }}>
          {problem.title.toLowerCase().replace(/ /g, '_')}.{currentLang?.ext}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {LANGUAGES.map(l => (
            <button key={l.id} onClick={() => setLang(l.id)}
              style={{ padding: '3px 9px', borderRadius: 6, border: '1px solid', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, transition: 'all 0.15s',
                borderColor: lang === l.id ? l.color : '#2d2d3f',
                background:  lang === l.id ? l.color + '22' : 'transparent',
                color:       lang === l.id ? l.color : '#6b7280',
              }}>
              {l.icon} {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code area */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        {/* Line numbers */}
        <div ref={lineNumRef} style={{ width: 38, background: '#16162a', padding: '14px 6px 14px 0', textAlign: 'right', borderRight: '1px solid #2d2d3f', userSelect: 'none', flexShrink: 0, overflow: 'hidden' }}>
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i} style={{ fontSize: 11.5, color: '#3d3d5c', lineHeight: '1.65', fontFamily: 'monospace', paddingRight: 6 }}>{i + 1}</div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={e => setCode(e.target.value)}
          onScroll={syncScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          style={{ flex: 1, padding: '14px 14px', background: '#1e1e2e', color: '#cdd6f4', border: 'none', outline: 'none', fontFamily: '"Fira Code", "Cascadia Code", monospace', fontSize: 13.5, lineHeight: '1.65', resize: 'none', tabSize: 2 }}
        />
      </div>

      {/* Action bar */}
      <div style={{ display: 'flex', gap: 8, padding: '9px 14px', background: '#16162a', borderTop: '1px solid #2d2d3f', flexShrink: 0, alignItems: 'center', flexWrap: 'wrap' }}>
        <button onClick={onReset}
          style={{ padding: '6px 12px', borderRadius: 7, border: '1px solid #2d2d3f', background: 'transparent', color: '#6b7280', fontSize: 12, fontFamily: 'inherit', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#4b4b6b'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#2d2d3f'}
        >
          ↩ Reset
        </button>
        <span style={{ flex: 1, fontSize: 10.5, color: '#3d3d5c' }}>Tab = indent · Ctrl+Enter = run</span>
        <button onClick={onRun} disabled={running}
          style={{ padding: '7px 20px', borderRadius: 8, border: 'none', cursor: running ? 'not-allowed' : 'pointer', fontSize: 12.5, fontFamily: 'inherit', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
            background: running ? '#2d2d3f' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)',
            color: running ? '#6b7280' : '#fff',
            boxShadow: running ? 'none' : '0 2px 8px rgba(108,60,225,0.4)',
          }}>
          {running
            ? <><span style={{ display: 'inline-block', width: 12, height: 12, border: '2px solid #6b7280', borderTopColor: '#a78bfa', borderRadius: 999, animation: 'spin 0.8s linear infinite' }} />Running...</>
            : '▶ Run Code'
          }
        </button>
        {output?.success && (
          <button onClick={onAnalyze} disabled={analyzing}
            style={{ padding: '7px 20px', borderRadius: 8, border: 'none', cursor: analyzing ? 'not-allowed' : 'pointer', fontSize: 12.5, fontFamily: 'inherit', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
              background: analyzing ? '#2d2d3f' : 'linear-gradient(135deg, #10b981, #059669)',
              color: analyzing ? '#6b7280' : '#fff',
              boxShadow: analyzing ? 'none' : '0 2px 8px rgba(16,185,129,0.4)',
            }}>
            {analyzing ? 'Analyzing...' : '🤖 AI Review'}
          </button>
        )}
      </div>

      {/* Resize handle */}
      <div onMouseDown={startDrag}
        style={{ height: 6, background: '#11111f', borderTop: '1px solid #2d2d3f', cursor: 'row-resize', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 32, height: 2, background: '#2d2d3f', borderRadius: 999 }} />
      </div>

      {/* Output */}
      <div style={{ height: outputHeight, background: '#11111f', borderTop: '1px solid #1a1a2e', padding: '10px 14px', overflowY: 'auto', flexShrink: 0, transition: 'height 0s' }}>
        <div style={{ fontSize: 10, color: '#3d3d5c', fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.5, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: output === null ? '#3d3d5c' : output.success ? '#28ca41' : '#ff5f57', display: 'inline-block' }} />
          Output
          {output?.time && <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>· ⚡ {output.time}s · {output.memory} KB</span>}
        </div>
        {output === null
          ? <div style={{ fontSize: 12, color: '#3d3d5c', fontFamily: 'monospace' }}>Click "Run Code" or press Ctrl+Enter to execute...</div>
          : <pre style={{ fontSize: 12.5, color: output.success ? '#a6e3a1' : '#f38ba8', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.65 }}>{output.output}</pre>
        }
      </div>

      {/* AI Analysis output */}
      {problem.analysis && (
        <div style={{ padding: '12px 16px', background: '#ecfdf5', borderTop: '1px solid #10b981', overflowY: 'auto', flexShrink: 0, maxHeight: 200, fontSize: 13, color: '#065f46', lineHeight: 1.6 }}>
          <div style={{ fontWeight: 800, marginBottom: 8, color: '#047857' }}>🤖 AI Code Review & Hidden Tests</div>
          <div style={{ whiteSpace: 'pre-line' }}>{problem.analysis}</div>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════
export default function CodingPractice() {
  const [selected, setSelected]   = useState(PROBLEMS[0])
  const [lang, setLang]           = useState(71)
  const [activeTab, setActiveTab] = useState('Description')
  const [filter, setFilter]       = useState({ diff: 'All' })
  const [search, setSearch]       = useState('')
  const [view, setView]           = useState('split')
  const [output, setOutput]       = useState(null)
  const [running, setRunning]     = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisMap, setAnalysisMap] = useState({})

  // Per-problem, per-language code map (persisted in state)
  const [codeMap, setCodeMap] = useState(() => {
    const map = {}
    PROBLEMS.forEach(p => {
      LANGUAGES.forEach(l => {
        map[`${p.id}-${l.id}`] = p.starterCode[l.id] || ''
      })
    })
    return map
  })

  const { user, profile } = useAuth()
  const solvedKey = `placeonix_solved_${user?.uid || 'guest'}`
  const codeKey_ls = `placeonix_code_${user?.uid || 'guest'}`

  // Solved set — per user, persisted in localStorage
  const [solved, setSolved] = useState(() => new Set())

  // Reload solved set whenever the logged-in user changes
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(solvedKey) || '[]')
      setSolved(new Set(stored))
    } catch {
      setSolved(new Set())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solvedKey])

  // Reload code editor content when user changes
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(codeKey_ls) || 'null')
      if (saved && typeof saved === 'object') {
        setCodeMap(saved)
      }
    } catch {
      // If parse fails, keep default starter code
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeKey_ls])

  const codeKey = `${selected.id}-${lang}`
  const code = codeMap[codeKey] || ''

  const setCode = (val) => setCodeMap(prev => {
    const next = { ...prev, [codeKey]: val }
    // Persist editor content per user
    try { localStorage.setItem(codeKey_ls, JSON.stringify(next)) } catch {}
    return next
  })

  function selectProblem(p) {
    setSelected(p)
    setOutput(null)
    setActiveTab('Description')
  }

  function changeLang(newLang) {
    setLang(newLang)
    setOutput(null)
    // code auto-restores from codeMap — no reset needed
  }

  async function handleRun() {
    if (!code.trim()) return
    setRunning(true)
    setOutput(null)

    // JS runs live in browser
    if (lang === 63) {
      try {
        const logs = []
        const con = { log: (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) }
        // eslint-disable-next-line no-new-func
        new Function('console', code)(con)
        setOutput({ success: true, output: logs.join('\n') || '(no output)' })
      } catch (err) {
        setOutput({ success: false, output: err.message, type: 'Error' })
      }
      setRunning(false)
      return
    }

    const result = await runCode(code, lang)
    setOutput(result)
    setRunning(false)
  }

  async function handleAnalyze() {
    if (!code.trim() || !output?.success) return
    setAnalyzing(true)
    try {
      const prompt = `Act as a strict Senior Engineer and automated test engine. I have solved the problem "${selected.title}".
      
My Code:
${code}

Please do the following:
1. HIDDEN TESTS: Mentally run my code against 2 edge case hidden tests. Tell me if it passes or fails them.
2. COMPLEXITY: State the Time (Big-O) and Space complexity.
3. REVIEW: Briefly tell me if it's memory-heavy and how to optimize it.

Keep it concise, formatting with bullet points.`
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt })
      })
      if (!res.ok) throw new Error('API failed')
      const data = await res.json()
      
      setAnalysisMap(prev => ({ ...prev, [codeKey]: data.response }))
    } catch (err) {
      setAnalysisMap(prev => ({ ...prev, [codeKey]: '⚠️ Failed to fetch AI review. Try again.' }))
    }
    setAnalyzing(false)
  }

  function handleReset() {
    setCodeMap(prev => ({ ...prev, [codeKey]: selected.starterCode[lang] || '' }))
    setOutput(null)
  }

  function toggleSolved() {
    setSolved(prev => {
      const next = new Set(prev)
      if (next.has(selected.id)) next.delete(selected.id)
      else next.add(selected.id)
      localStorage.setItem(solvedKey, JSON.stringify([...next]))

      // Write coding score to Firestore so readiness formula reflects real progress
      if (user) {
        try {
          const REQUIRED_MASTERY = 10
          const codingScore = Math.min(100, Math.round((next.size / REQUIRED_MASTERY) * 100))
          updateDoc(doc(db, 'users', user.uid), {
            codingScore,
            placementReadiness: computeReadiness({
              aptitudeScore:      profile?.aptitudeScore      ?? 0,
              mockInterviewScore: profile?.mockInterviewScore ?? 0,
              currentStreak:      profile?.currentStreak     ?? 0,
              codingScore,
            }),
          }).catch(() => {})
        } catch (_) {}
      }

      return next
    })
  }

  return (
    <div className="responsive-app-height">
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexShrink: 0, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.2 }}>💻 Coding Practice</h1>
          <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{PROBLEMS.length} problems · Arrays · Strings · DP · Linked Lists · Hard</p>
        </div>

        {/* Difficulty counts */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          {['Easy', 'Medium', 'Hard'].map(d => (
            <div key={d} style={{ padding: '5px 12px', background: DIFFICULTY_META[d].bg, border: `1px solid ${DIFFICULTY_META[d].border}`, borderRadius: 999, fontSize: 11.5, fontWeight: 700, color: DIFFICULTY_META[d].color }}>
              {PROBLEMS.filter(p => p.difficulty === d).length} {d}
            </div>
          ))}
        </div>

        {/* View toggle */}
        <div style={{ display: 'flex', gap: 3, background: '#f3f4f6', borderRadius: 10, padding: 3 }}>
          {[['split','⊞ Split'], ['problem','📄 Problem'], ['editor','💻 Editor']].map(([v, label]) => (
            <button key={v} onClick={() => setView(v)}
              style={{ padding: '5px 10px', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, fontFamily: 'inherit', transition: 'all 0.15s',
                background: view === v ? '#fff' : 'transparent',
                color: view === v ? 'var(--purple-primary)' : 'var(--text-muted)',
                boxShadow: view === v ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="responsive-split">
        {(view === 'split' || view === 'problem') && (
          <ProblemList
            problems={PROBLEMS} selected={selected} onSelect={selectProblem}
            filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}
            solved={solved}
          />
        )}
        {(view === 'split' || view === 'problem') && selected && (
          <div style={{ flex: view === 'split' ? '0 0 340px' : 1, border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <ProblemPanel
              problem={selected} activeTab={activeTab} setActiveTab={setActiveTab}
              onMarkSolved={toggleSolved} isSolved={solved.has(selected.id)}
            />
          </div>
        )}
        {(view === 'split' || view === 'editor') && (
          <CodeEditor
            problem={{ ...selected, analysis: analysisMap[codeKey] }} lang={lang} setLang={changeLang}
            code={code} setCode={setCode}
            output={output} running={running}
            onRun={handleRun}
            onReset={handleReset}
            analyzing={analyzing}
            onAnalyze={handleAnalyze}
          />
        )}
      </div>
    </div>
  )
}