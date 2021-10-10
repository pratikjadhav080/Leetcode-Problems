//https://leetcode.com/problems/next-greater-node-in-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var nextLargerNodes = function(head) {
    
    if(!head.next) return [0];
    
    let current = head
    let a = []
    let st=[]
    let ans = []
    
    while(current){
        a.push(current.val)
        current=current.next
    }
    
    for(let i=a.length-1;i>=0;i--){
        
        while(st.length!=0 && st[st.length-1]<=a[i]){
            st.pop()
        }
        
        st.length==0?ans.push(0):ans.push(st[st.length-1])
        
        st.push(a[i])
    }
    
    return ans.reverse()

};