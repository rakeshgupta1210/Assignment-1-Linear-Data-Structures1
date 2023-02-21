// Delete the elements in an linked list whose sum is equal to zero
// Reverse a linked list in groups of given size
// Merge a linked list into another linked list at alternate positions.
// In an array, Count Pairs with given sum
// Find duplicates in an array
// Find the Kth largest and Kth smallest number in an array
// Move all the negative elements to one side of the array
// Reverse a string using a stack data structure
// Evaluate a postfix expression using stack
// Implement a queue using the stack data structure



// Q.1 -> Delete the elements in an linked list whose sum is equal to zero ? 


var removeElements = function(num, val) {

    let dummy = new ListNode(-1);
    dummy.next = num;
    let prev = dummy;
    let cur = num;
    
    while(cur) {
      if(cur.val === val) {
        prev.next = cur.next;
        cur =  cur.next;
      } else {
         prev = cur;
         cur = cur.next;
      }
    }
    
    return dummy.next;
  };
  
  let num = [1, 2, 3, 4, 6, 5, 6, 7];
  let val = 6;
  console.log(removeElements(head));


//------------------------------------------------------------------------------------------------------------



  // Q.2 -> Reverse a linked list in groups of given size ?

  var head; // head of list

	/* Linked list Node */
	class Node {
			constructor(val) {
				this.data = val;
				this.next = null;
			}
		}

	function reverse(head , k) {
		if (head == null)
			return null;
		var current = head;
		var next = null;
		var prev = null;

		var count = 0;

		/* Reverse first k nodes of linked list */
		while (count < k && current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}

		/*
		next is now a pointer to (k+1)th node
		Recursively call for the list starting
		from current. And make rest of the list
		as next of first node
		*/
		if (next != null)
			head.next = reverse(next, k);

		// prev is now head of input list
		return prev;
	}

	/* Utility functions */

	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		/*
		1 & 2: Allocate the Node & Put in the data
		*/
		new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	/* Function to print linked list */
	function printList() {
		temp = head;
		while (temp != null) {
            console.log(temp.data + " ");
          
			
			temp = temp.next;
          
		}
     
		
      
	}

	/* Driver program to test above functions */
	
		
		/*
		Constructed Linked List is
		1->2->3->4->5->6-> 7->8->8->9->null
		*/
        push(10);
		push(9);
		push(8);
		push(7);
		push(6);
		push(5);
		push(4);
		push(3);
		push(2);
		push(1);
     
		

		head = reverse(head, 8);

		console.log("Reversed Linked List<br/>");
		printList();

//-------------------------------------------------------------------------------------------------

        
        

// Q. 3 -> Merge a linked list into another linked list at alternate positions.?
  
// A nexted list node 
class Node 
{ 
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}; 
  
/* Function to insert a node at the beginning */
function push(head_ref, new_data) 
{ 
    var new_node = new Node();
    new_node.data = new_data; 
    new_node.next = (head_ref); 
    (head_ref) = new_node;
    return head_ref;
  
} 
  
/* Utility function to print a singly linked list */
function printList(head) 
{ 
    var temp = head; 
    while (temp != null) 
    { 
      console.log( temp.data + " ");
        
        temp = temp.next; 
    } 
  
    console.log("<br>");
 
} 
  
// Main function that inserts nodes of linked list q into p at 
// alternate positions. Since head of first list never changes 
// and head of second list may change, we need single pointer 
// for first list and double pointer for second list. 
function merge(p, q) 
{ 
    var p_curr = p, q_curr = q; 
    var p_next, q_next; 
  
    // While there are available positions in p 
    while (p_curr != null &&  q_curr != null) 
    { 
        // Save next pointers 
        p_next = p_curr.next; 
        q_next = q_curr.next; 
  
        // Make q_curr as next of p_curr 
        q_curr.next = p_next; // Change next pointer of q_curr 
        p_curr.next = q_curr; // Change next pointer of p_curr 
  
        // Update current pointers for next iteration 
        p_curr = p_next; 
        q_curr = q_next; 
    } 
  
    q = q_curr; // Update head pointer of second list 
    return q;
} 
  
// Driver code 
var p = null, q = null; 
p = push(p, 3); 
p = push(p, 2); 
p = push(p, 1); 
console.log( "First Linked List:<br>"); 
printList(p);

q = push(q, 8); 
q = push(q, 7); 
q = push(q, 6); 
q = push(q, 5); 
q = push(q, 4); 
console.log( "Second Linked List:<br>"); 
printList(q); 

q = merge(p, q); 
console.log( "Modified First Linked List:<br>"); 
printList(p); 

console.log( "Modified Second Linked List:<br>"); 
printList(q);

//---------------------------------------------------------------------------------------------------------



// Q. 4. -> In an array, Count Pairs with given sum?

let array1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];   // return 3 (2 pairs of 10 and 1 pair of 20)
let array2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];         // return 4 (2 pairs of 1 and 2 pairs of 3)

function countPairs(array) {
  let obj = {};

  array.forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });
  
  return Object.values(obj).reduce((acc, curr) => {
    acc += Math.floor(curr / 4)
    return acc;
  }, 0);
}

console.log(countPairs(array1));
console.log(countPairs(array2));

//-----------------------------------------------------------------------------------------------------


// Q. 5.-> Find duplicates in an array?


const findDuplicates = (arr) => {
	let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
	// JS by default uses a crappy string compare.
	// (we use slice to clone the array so the
	// original array won't be modified)
	let results = [];
	for (let i = 0; i < sorted_arr.length - 1; i++) {
	  if (sorted_arr[i + 1] == sorted_arr[i]) {
		results.push(sorted_arr[i]);
	  }
	}
	return results;
  }
  
  let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
  console.log(`The duplicates in ${duplicatedArray} are <b> ${findDuplicates(duplicatedArray)}`);
  
//-----------------------------------------------------------------------------------------------------------




// Q. 6.-> Find the Kth largest and Kth smallest number in an array?


// Standard partition process of QuickSort.
    // It considers the last element as pivot
    // and moves all smaller element to left of
    // it and greater elements to right
    function partition( arr , l , r)
    {
        var x = arr[r], i = l;
        for (j = l; j <= r - 1; j++) {
            if (arr[j] <= x) {
                // Swapping arr[i] and arr[j]
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
 
                i++;
            }
        }
 
        // Swapping arr[i] and arr[r]
        var temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
 
        return i;
    }
 
    // This function stops at k'th smallest element
    // in arr[l..r] using QuickSort based method.
    function kthSmallest( arr , l , r , k,n) {
        // If k is smaller than number of elements
        // in array
        if (k > 0 && k <= r - l + 1) {
            // Partition the array around last
            // element and get position of pivot
            // element in sorted array
            var pos = partition(arr, l, r);
 
            // If position is same as k
            if (pos - l == k - 1)
                return;
 
            // If position is more, recur for
            // left subarray
            if (pos - l > k - 1)
                return kthSmallest(arr, l, pos - 1, k,n);
 
            // Else recur for right subarray
            return kthSmallest(arr, pos + 1, r,
            k - pos + l - 1,n);
        }
 
        // If k is more than number of elements
        // in array
     
        console.log("Invalid value of K");
    }
     
     
    function KthLargest(arr , l , r , k,n)
{
    // This function arranges k Largest elements in last k positions
    // It means it arranges N-K-1 smallest elements from starting
     
    kthSmallest( arr , l , r , k,n);
}
 
 
    // Driver program to test above methods
     
        var arr = [ 18, 4, 2, 1, 10, 7, 40, 85, 100, 70, 60];
        // Lets assume k is 3
        var k =3;
        var n = arr.length;
 
           
       // Function call
 
       // For Smallest
       kthSmallest(arr, 0,n-1, k,n);
 
       // Print KSmallest no.
       if (k >=1 && k <= n){
        console.log(k+ " smallest elements are : ");
       
        for (let i = 0; i < k; i++)
         console.log(arr[i]+" ");
       }
        
        console.log("<br/>");
 
        // For Largest
        KthLargest(arr, 0,n-1, k,n);
 
        // Print KLargest no.
         
        if (k >=1 && k <= n){
         console.log(k+ " largest elements are : ");
          
         for (var i = n - 1; i >= n - k; i--)
         console.log(arr[i]+ "  ");
       }


 //---------------------------------------------------------------------------------------------------------------


// Q. 7.-> Move all the negative elements to one side of the array ?


// Moves all -ve element to end of array in
// same order.
function SeparateNegativeElements(arr, n)
{
    // Create an empty array to store result
    let temp= new Array(n);
 
    // Traversal array and store +ve element in
    // temp array
    let j = 0; // index of temp
    for (let i = 0; i < n ; i++)
        if (arr[i] >= 0 )
            temp[j++] = arr[i];
 
    // If array contains all positive or all negative.
    if (j == n || j == 0)
        return;
 
    // Store -ve element in temp array
    for (let i = 0 ; i < n ; i++)
        if (arr[i] < 0)
            temp[j++] = arr[i];
 
   for (let i = 0; i < n ; i++) arr[i] = temp[i];
}
 
// Driver program
 
let arr= [1 ,-1 ,-3 , -2, 7, 5, 11, 6];
let n = arr.length;
 
SeparateNegativeElements(arr, n);

  console.log("Moving All Negative Elements To End Are");
  console.log(arr);


  //-------------------------------------------------------------------------------------------------------


 //Q. 8.-> Reverse a string using a stack data structure?


 // Javascript program to reverse
// String using Stack
 
// stack
class Stack
{
    size;
    top;
    a = [];
  
    // Function to check if stack is empty
    isEmpty()
    {
        return(this.top < 0);
    }
     
    constructor(n)
    {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    }
  
    // Function to push element in Stack
    push(x)
    {
        if (this.top >= this.size)
        {
            console.log("Stack Overflow<br>");
            return false;
        }
        else
        {
            this.a[++this.top] = x;
            return true;
        }
    }
  
    // Function to pop element from stack
    pop()
    {
        if (this.top < 0)
        {
            console.log("Stack Underflow<br>");
            return 0;
        }
        else
        {
            let x = this.a[this.top--];
            return x;
        }
    }
}
 
// Function to reverse the string
function reverse(str)
{
     
    // Create a stack of capacity
    // equal to length of string
    let n = str.length;
    let obj = new Stack(n);
      
    // Push all characters of string
    // to stack
    let i;
    for(i = 0; i < n; i++)
        obj.push(str[i]);
  
    // Pop all characters of string
    // and put them back to str
    for(i = 0; i < n; i++)
    {
        let ch = obj.pop();
        str[i] = ch;
    }
}
 
// Driver Code
let s = "GeeksQuiz".split("");
 
// Call reverse method
reverse(s);
 
// Print the reversed string
console.log("Reversed string is " + s.join(""));


//-------------------------------------------------------------------------------------------------------------


//Q. 9.-> Evaluate a postfix expression using stack?

function postfixEval( postfixArray ) {
	var stack = [];

	for( element of postfixArray){
		console.log("element: " + element);

		if(isNaN(element)){
			var x = stack.pop();
			var y = stack.pop();
			console.log("var x/y: " + x + " " + y + " element: " + element) ;
			if (element == "+"){
				result = (y+x);
				console.log("Expected Result: " + result)
				stack.push(y + x);
			} else if (element == '-'){
				stack.push(y - x);
			} else if (element == '*'){
				stack.push(y * x);
			} else if (element == '/'){
				stack.push(y / x);
			}
		} else {
			stack.push( parseFloat(element) );
		}
	}
	//final check for non numbers within the stack
	var returnValue = null;
	while( stack.length > 0 ){
		console.log( stack );
		var element = stack.pop();  
		if(isNaN(element)){
			continue;
		} else{
			returnValue = element;
		}
	}
	return returnValue;
}

postfixEval('251*+8-');


//-------------------------------------------------------------------------------------------------------------------------

//Q.10.-> Implement a queue using the stack data structure?

// Javascript program to implement Queue using 
// two stacks with costly enQueue() 
class Queue{
     
	constructor()
	{
		this.s1 = [];
		this.s2 = [];
	}
	 
	enQueue(x)
	{
		 
		// Move all elements from s1 to s2
		while (this.s1.length != 0)
		{
			this.s2.push(this.s1.pop());
			//s1.pop();
		}
	 
		// Push item into s1
		this.s1.push(x);
	 
		// Push everything back to s1
		while (this.s2.length != 0)
		{
			this.s1.push(this.s2.pop());
			//s2.pop();
		}
	}
	 
	// Dequeue an item from the queue 
	deQueue()
	{
		 
		// If first stack is empty
		if (this.s1.length == 0)
		{
			console.log("Q is Empty");
		}
	 
		// Return top of s1
		let x = this.s1[this.s1.length - 1];
		this.s1.pop();
		return x;
	}
	}
	 
	// Driver code
	let q = new Queue();
	q.enQueue(1);
	q.enQueue(2);
	q.enQueue(3);
	q.enQueue(4);
	q.enQueue(5);
	 
	console.log(q.deQueue() + "");
	console.log(q.deQueue() + "");
	console.log(q.deQueue() + "");
	console.log(q.deQueue() + "");
	console.log(q.deQueue() + "");


//----------------------------------------------------------------------------------------------------------
