/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 let headLength = (current) =>{
    
    let len=1;
    while(current.next){
        current=current.next
        len++
    }
    
    return len
}


var getIntersectionNode = function(headA, headB) {
    
    let lenA = headLength(headA)
    let lenB = headLength(headB)
    let loop = Math.abs(lenA-lenB)
    let i=0;
    
    if(lenA>lenB){
        while(i<loop){
            headA=headA.next
            i++
        }
    }else if(lenB>lenA){
        while(i<loop){
            headB=headB.next
            i++
        }
    }
    
    while(headA!==headB && headA && headB){
        headA=headA.next
        headB=headB.next
    }
    
    if(headA==headB){
       return headA
    }else{
        return null
    }
    
  
};