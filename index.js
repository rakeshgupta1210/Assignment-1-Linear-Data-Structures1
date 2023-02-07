// Solve these questions in a Jupyter notebook. Share the URL of the Jupyter notebook/GitHub.

// Delete the elements in an linked list whose sum is equal to zero
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // If there is no head
    if (!this.head) {
      // make inserted node the head
      this.head = newNode;
      this.length++;
      return this.head;
    }
  }

  getTail() {
    let curNode = this.head;
    while (curNode.next) {}
  }
}

// Reverse a linked list in groups of given size
// Merge a linked list into another linked list at alternate positions.

// In an array, Count Pairs with given sum
// Time complexity => O(n)
// Space complexity => O(n)
const countPairs = (arr, sum) => {
  const valIndexMap = {};
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    valIndexMap[ele] = valIndexMap[ele] || [];
    valIndexMap[ele].push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    let complement = sum - arr[i];
    if (complement in valIndexMap && valIndexMap[complement].length > 0) {
      pairs.push([arr[i], complement]);
      valIndexMap[complement].pop();
      valIndexMap[arr[i]].pop();
    }
  }
  return pairs;
};

const val_arr = [1, 2, 4, 6, -1, 7, 8, 0, 3, 6, 9, 5, 4, 0, 3];
console.log(countPairs(val_arr, 6));

// Find duplicates in an array
// Time complexity => O(n)
// Space complexity => O(n)
const findDuplicates = (arr) => {
  let countObj = {};
  let duplicates = [];
  for (const ele of arr) {
    countObj[ele] = (countObj[ele] ?? 0) + 1;
  }
  for (const key in countObj) {
    if (countObj[key] > 1) duplicates.push(key);
  }
  return duplicates;
};

const duplicate_arr = [1, 2, 4, 6, 7, 8, 0, 6, 9, 5, 4];
console.log(
  "duplicates in ",
  duplicate_arr,
  " = ",
  findDuplicates(duplicate_arr)
);
// Find the Kth largest and Kth smallest number in an array
// Move all the negative elements to one side of the array
// Reverse a string using a stack data structure
// Evaluate a postfix expression using stack
// Implement a queue using the stack data structure
