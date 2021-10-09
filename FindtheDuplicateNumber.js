//https://leetcode.com/problems/find-the-duplicate-number/


let dupNum = (nums) => {

    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])!=i){
            return nums[i]
        }
    }
}


function runProgram(input) {

    let N = input.trim().split(" ").map(Number)

    console.log(dupNum(N))

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
