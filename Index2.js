// 1. Tallene fra 1-50
let num = 1;
let output1 = "";
while (num <= 50) {
    output1 += num;
    num++;
}
console.log(output1);

// 2. Partallene fra 1-50
num = 2;
let output2 = "";
while (num <= 50) {
    output2 += num;
    num += 2;
}
console.log(output2);

// 3. Tall fra 1 til 100 som er delbare med både 3 og 5
let output3 = "";
num = 1;
while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        output3 += num + ", ";
    }
    num++;
}
console.log(output3);

// 4. Tall fra 1 til 100 som er delbare med 3 eller 5
let output4 = "";
num = 1;
while (num <= 100) {
    if (num % 3 === 0 || num % 5 === 0) {
        output4 += num + ", ";
    }
    num++;
}
console.log(output4);
