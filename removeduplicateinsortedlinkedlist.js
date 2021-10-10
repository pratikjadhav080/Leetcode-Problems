//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    
    if(!head)return null;
    if(!head.next)return head;
    
    let current = head;
    
    while(current){
        
    let prev = current
        
    while(prev && current.val === prev.val){
        prev = prev.next
    }
    
    current.next = prev
    
    current = current.next
    }
    
    return head
    
};