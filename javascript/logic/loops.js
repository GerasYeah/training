for (let i = 0; i < 5; i++) {
    console.log("Loop com For: " + i);
}

let j = 0;
while (j < 5) {
    console.log("Loop com While: " + j);
    j++;
}

let k = 0;
do {
    console.log("Loop com Do While: " + k);
    k++;
} while (k < 5);

function recursiveFunction(n) {
    if (n > 0) {
        recursiveFunction(n - 1);
        console.log("Loop com função recursiva: " + n);
    }
}

let l = 5;
recursiveFunction(l);