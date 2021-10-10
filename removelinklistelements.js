//https://leetcode.com/problems/remove-linked-list-elements/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    
    if(!head) return null;
    
    let current = head;
    let prev;
    
    while(head && current.val === val){
        head = current.next
        current= current.next
    }
    
    while(current){
        
        if(current.val === val){
            prev.next = current.next
            current = prev
        }
        
        prev=current
        current= current.next

    }
    
    return head
};