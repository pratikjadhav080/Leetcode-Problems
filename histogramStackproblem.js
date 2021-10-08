// find nearest smaller to left index , push it in the array
// find nearest smaller to right index, push it in the array
// take difference between the two arrays
// then multiply it with the original array of input
// find the maximum in resultant array


// /**
//  * @param {number[]} heights
//  * @return {number}
//  */

//https://leetcode.com/problems/largest-rectangle-in-histogram/

 let largestRectangleArea = function(heights) {
    

    let st = []
    let smallestToLeft = []

    heights.forEach((e,i) => {

        while (st.length != 0 && st[st.length - 1][0] >= e) {

            st.pop()
        }

        st.length == 0 ? smallestToLeft.push(-1) : smallestToLeft.push(st[st.length - 1][1])

        st.push([e,i])
    })

    
    st = []
    let smallestToRight = []

    for(let i=heights.length-1;i>=0;i--){

        while (st.length != 0 && st[st.length - 1][0] >= heights[i]) {

            st.pop()
        }

        st.length == 0 ? smallestToRight.push(heights.length) : smallestToRight.push(st[st.length - 1][1])

        st.push([heights[i],i])

    }

    smallestToRight= smallestToRight.reverse()
    
    
    let max = -1;

    for(let i=0;i<heights.length;i++){
        
        smallestToLeft[i]=(smallestToRight[i]-smallestToLeft[i]-1)*heights[i]
        
        if(smallestToLeft[i]>max){
            max = smallestToLeft[i]
        }
    }

    return max
    
};