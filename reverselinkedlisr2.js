/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    
    if(left==right) return head;

    let current = head;
    let i=1;
    let pre;
    let flag = false
    
    while(i<left){
        flag = true
        pre = current
        current=current.next
        i++
    }

    let a = current
    let prev = null
    let post = null
    i=0
    loop = right-left 
    
    while(i<=loop){
        post = current.next
        current.next = prev 
        prev = current
        current = post
        i++
    }

    a.next = current
    
    if(flag){
        pre.next = prev
        return head
    }else{
        return prev
    }

};