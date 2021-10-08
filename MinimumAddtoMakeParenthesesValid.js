//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

let minAddToParen = (N) => {

    let st = []
    let s = 0;

    for (const i of N) {

        if(i==="("){
            st.push(i)
        }else{

            if(st.length){
                st.pop()
            }else{
                s=s+1;
            }
        }
    }

    if(st.length){
        s=s+st.length
    }

    return s

}


function runProgram(input) {

    let N = input.trim()

    console.log(minAddToParen(N))

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