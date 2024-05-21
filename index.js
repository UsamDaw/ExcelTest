/* Task 1
const tallListe = [3, 8, 12, 5, 17, 22, 10];
let nyList = []

tallListe.forEach(element => {
    var kvat = element*element
    console.log(kvat);
    nyList.push(kvat)
});

console.log(tallListe);
console.log(nyList);
*/

/* Task 2
let strengListe = ["hund", "katt", "fugl", "elefant"];

strengListe.forEach((element) => {
    console.log(strengListe.indexOf(element) +" "+ element);
});
*/


/* Task 3
const personer = [ 

    {navn: "Emma", alder: 28, yrke: "Engineer", telefon: "123-456-7890", boSted: "Oslo" },

    {navn: "Olav", alder: 20, yrke: "Student", telefon: "987-654-3210", boSted: "Bergen" }, 

    {navn: "Ingrid", alder: 32, yrke: "Doctor", telefon: "555-123-4567", boSted: "Trondheim" } 

];

personer.forEach(element => {
    console.log(`${element.navn}, ${element.alder} years old, works as a ${element.yrke}, phone number is ${element.telefon}, lives in ${element.boSted}.`);
});
*/

/* Task 4
const personer = [ 

    {navn: "Emma", alder: 28, yrke: "Engineer", telefon: "123-456-7890", boSted: "Oslo" },

    {navn: "Olav", alder: 20, yrke: "Student", telefon: "987-654-3210", boSted: "Bergen" }, 

    {navn: "Ingrid", alder: 32, yrke: "Doctor", telefon: "555-123-4567", boSted: "Trondheim" } 

];

personer.forEach(element => {
    let three = element.telefon.substring(0, 3)
    console.log(`The first three phone number digits are ${three}`);
});
*/

/*
const foodies = ["apple", "apple pie", "apple juice", "apple cake"]

foodies.forEach(foood => {
    console.log(foood)
});
*/

/*
const mumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let row = '';

for (const i of mumber) {
    row += i + ' ';
}

console.log(row.trim());
*/

/*
const sui = ["SIUUUU"]

sui.forEach(cool => {
    console.log(`CR7 once said ${sui}`)
});
*/


/*
const watermelon = ["watermelon slice"];
const watermelonJuice = ["watermelon juice"]
let order = '';

for (const i of watermelon) {
    order += i + ' ';
}

console.log(`I would like to order three ${watermelon}s and one ${watermelonJuice}`);
*/

