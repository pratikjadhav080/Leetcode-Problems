var removeCycle = function(head) {
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        
        fast=fast.next.next
        slow = slow.next
        
        if(fast === slow){
            
            fast = head
            
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }

            while(fast.next!=slow){
                fast=fast.next 
            }
            
            fast.next = null

            return head
        }
    }
    
    return "no cycle"
    
};