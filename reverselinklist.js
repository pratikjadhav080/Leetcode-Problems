// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
 var reverseList = function(head) {
    
    let prev = null 
    let post = null
    let current = head

    while(current){

        post = current.next;
        current.next = prev;
        prev = current;
        current = post
    }
    
    head = prev
    return head

};