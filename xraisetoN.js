let power = (x,n) => {

    if(n==0){
        return 1;
    }

    return x * power(x,n-1)

}

function runProgram(input){

    let N = input.trim().split(" ").map(Number)

    let x = N[0]
    let n = N[1]

    console.log(power(x,n))

  }

  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
   read += input;
  });
  process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
  });
  process.on("SIGINT", function () {
   runProgram(read);
   process.exit(0);
  });
