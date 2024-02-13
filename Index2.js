let output1 = "";
for (let num = 1; num <= 50; num++) {
    output1 += num;
}
console.log(output1);

let output2 = "";
for (let num = 2; num <= 50; num += 2) {
    output2 += num;
}
console.log(output2);

let output3 = "";
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        output3 += num + ", ";
    }
}
console.log(output3);

let output4 = "";
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
        output4 += num + ", ";
    }
}
console.log(output4);
