const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below

var isPalindrome = function (head) {
    
    if(!head.next) return true;
    
    let slow = head;
    let fast = head;
    
    let st=[]
    
    while(fast && fast.next){
        
        st.push(slow.data)
        
        fast = fast.next.next
        slow = slow.next
        
    }
    
    if(fast && !fast.next){
        slow = slow.next
    }
    
    while(slow){
        
        if(slow.data!==st.pop()){
            return false;
        }
        slow=slow.next
    }
    
    return true

};
