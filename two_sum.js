//https://leetcode.com/problems/two-sum/

function bubbleSort(a,n){
    for(var i=0;i<n-1;i++){
        var swap = false;
        for(j=0;j<n-i-1;j++){

            if(a[j][0]>a[j+1][0]){
                var temp = a[j]
                a[j] = a[j+1]
                a[j+1]=temp

                swap=true;
            }
        }
        if(swap==false){
            break;
        }
    }

    return a
}

let twoSum = (nums, target) => {

    let left = 0;
    let right = nums.length-1;
    let sum;
    
    let n = bubbleSort(nums,nums.length)

    console.log(n)
    
    while(left<right){

        sum = n[left][0]+n[right][0]

        
        if( sum< target){
            left++
        }else if(sum > target){
            right--
        }else{
            console.log(sum)
            return [n[left][1],n[right][1]]
        }
    }
    
}


function runProgram(input) {

    let N = input.trim().split(/[\r\n]+/)

    let arr = N[0].split(" ")
    let a = []
    
    for(let i=0;i<arr.length;i++){
        a.push([+arr[i],i])
    }
    let k = +N[1]

    console.log(twoSum(a,k))

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    runProgram(read);
    process.exit(0);
});