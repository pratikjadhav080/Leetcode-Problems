//https://leetcode.com/problems/happy-number/



let isHappy = (a) => {

    let s = new Set();
    let sum=0;
    let n;

    while(sum!=1){

        sum=0;

        for(let i=0;i<a.length;i++){
            n = Number(a[i])
            sum=sum+(n*n)
        }

        if(s.has(sum)){
            return false
        }

        s.add(sum)
        a = sum.toString()
        

    }

    return true

}


function runProgram(input) {

    let N = input.trim()

    console.log(isHappy(N))

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
