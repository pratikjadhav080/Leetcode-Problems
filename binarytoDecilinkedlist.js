//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

 let lenofhead = (head) =>{
    
    let i=0;
    let curr = head
    
    while(curr){
        curr = curr.next
        i++
    }
    
    return i
}

var getDecimalValue = function(head) {
    
    let len =  lenofhead(head)
    let sum=0;
    let current = head
    let counter = 1
    
    while(current){
        
        sum=sum+((current.val)*(Math.pow(2, len-counter)))
        counter++
        current = current.next
    }
    
    return sum
};