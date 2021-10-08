/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
 var mergeTwoLists = function(l1, l2) {
    
    let node;
    let current = l1
    let current1 = l2
    
    if(!l1 && !l2){
        return null
    }else if(!l2){
        return l1
    }else if(!l1){
        return l2
    }

    if(current.val>current1.val){
        node = new ListNode(current1.val)
        current1 = current1.next
    }else{
        node = new ListNode(current.val)
        current = current.next
    }
    
    let curr = node
    
    while(current && current1){
        
        if(current.val>current1.val){
            
            curr.next = current1
            current1 = current1.next

        }else{
            curr.next = current
            current = current.next
        }
        
        curr = curr.next
    }
    
    
    if(current){
        curr.next = current
    }else if(current1){
        curr.next = current1
    }
    
    return node
};