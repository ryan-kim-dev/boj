const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');
const A = input;
      if(A >= 90) {
        console.log("A");
      } else if (A >= 80) {
        console.log("B");
      } else if (A >= 70) {
        console.log("C");
      } else if (A >= 60) {
        console.log("D");
      } else {
        console.log("F");
      }