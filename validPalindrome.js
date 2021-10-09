//https://leetcode.com/problems/valid-palindrome/

// ".,"

let palli = (str) => {

    let left = 0;
    let right = str.length - 1;
    let code;

    while (left < right) {

        code = str[left]

        while (!((code >= "a" && code <= "z") || (code >= "0" && code <= "9")|| (code >= "A" && code <= "Z")) && left<right) {
            left++
            code = str[left]
        }

        code = str[right]

        while (!((code >= "a" && code <= "z") || (code >= "0" && code <= "9")|| (code >= "A" && code <= "Z")) && left<right) {
            right--
            code = str[right]
        }


        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false
        }

        left++
        right--

    }

    return true
}


function runProgram(input) {

    let N = input.trim()

    console.log(palli(N))

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
