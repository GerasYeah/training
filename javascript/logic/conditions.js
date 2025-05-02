// Situtation 1:
let person = "Lucas";
let age = 20;
let haveDriverLicense = true;
let isStudent = false;

if (age >= 18 && haveDriverLicense) {
    console.log(person + " é maior de idade e tambem pode dirigir.");
} else if (age < 18 && haveDriverLicense) {
    console.log(person + " é menor de idade, mas pode dirigir.");
} else if (age >= 18 && !haveDriverLicense) {
    console.log(person + " é maior de idade, mas não pode dirigir.");
} else {
    console.log(person + " é menor de idade e não pode dirigir.");
}

if (isStudent) {
    console.log(person + " é estudante.");
} else {
    console.log(person + " não é estudante.");
}

// Situtation 2:
let person2 = "Maria";
let age2 = 17;
let haveDriverLicense2 = false;
let canDrive = haveDriverLicense2 && age2 >= 18;

if (age2 >= 18) {
    console.log(person2 + " é maior de idade.");
} else {
    console.log(person2 + " é menor de idade.");
}

if (canDrive) {
    console.log(person2 + " pode dirigir.");
} else {
    console.log(person2 + " não pode dirigir.");
}