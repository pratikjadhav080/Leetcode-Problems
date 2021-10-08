//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/


// 8*((1*(5+6))*(8/6))
let depthParen = (s) => {

    let dep = 0
    let max_dep = 0

    for (let i of s) {
        if (i === '(') {
            dep++
            if (dep > max_dep) {
                max_dep = dep
            }
        } else if (i === ')') {
            dep--
        }
    }

    return max_dep
}


function runProgram(input) {

    let N = input.trim()

    console.log(depthParen(N))

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