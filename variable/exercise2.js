
let array = [];

let row1 = [];
let obj1 = {
    name: "Nigeria",
    population: 10000,
    temp: 11,
    currency: "NG"
};

let obj2 = {
    name: "USA",
    population: 12000,
    temp: 19,
    currency: "USD"
};

let obj3 = {
    name: "ENGLAND",
    population: 1541,
    temp: 20,
    currency: "P"
};

row1.push(null);
row1.push(obj1);
row1.push(obj2);
row1.push(obj3);
array.push(row1);

let row2 = [];
let obj4 = {
    name: "Kwait",
    population: 20000,
    temp: 9,
    currency: "KD"
};

let obj5 = {
    name: "Ghana",
    population: 12020,
    temp: 15,
    currency: "CD"
};

let obj6 = {
    name: "France",
    population: 15419,
    temp: 5,
    currency: "FR"
};

row2.push(obj1);
row2.push(obj2);
row2.push(obj3);
row2.push(null);
array.push(row2);

let row3 = [];
let obj7 = {
    name: "Kotonu",
    population: 2309,
    temp: 10,
    currency: "FR"
};

let obj8 = {
    name: "Zambia",
    population: 11200,
    temp: 12,
    currency: "Z"
};

let obj9 = {
    name: "Canada",
    population: 10541,
    temp: 13,
    currency: "C"
};

row3.push(obj1);
row3.push(null);
row3.push(obj2);
row3.push(obj3);
array.push(row3);
console.table(array);


let sumOfTemps = 0;

for (let i = 0; i < array.length; i++) {
    let row = array[i];
    
    for (let j = 0; j < row.length; j++) {
        let obj = row[j];
        
        if (obj && obj.temp <= 10) {
            console.log(`Country: ${obj.name}, Population: ${obj.population}`);
            sumOfTemps += obj.temp;
        }
    }
}

console.log(`Sum of temps <= 10: ${sumOfTemps}`);



