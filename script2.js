'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 20}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// console.log(map.get(shops[0]));
console.log(map);
// map.delete(key);
// map.clear();
// map.size;

// console.log(map.keys);

// const goods = [];
// for (let shop of map.keys()) {
//     // console.log(shop);
//     goods.push(Object.keys(shop));
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()){
//     console.log(price, shop);
// }

// map.forEach ((value, key, map) => {
//     console.log(key, value);
// })

//-------------

let mapShop = new Map([
    ["молоток", 50],
    ["гвозди", 10],
    ["пила", 60],
    ["носки", 10],
    ["брус дуба", 10],
    ["брус ели", 10],
    ["дрель", 10],
    ["болгарка", 10],
    ["шлифовочной диск", 10],
    ["нождачная бумага", 10],
    ["сверла", 10],
    ["проволока", 10],
    ["рубанок", 10],
    ["точило", 10],
]);

console.log(mapShop.size);

// for (let k of mapShop.entries()){
//     console.log(k);
// }

// mapShop.get("рубанок");
mapShop.set("DNIPRO", 5000);

let newShop = new Map (mapShop);

newShop.forEach((value, key, map) => {
    console.log('===', `${key}: ${value}`);
});

console.log(newShop);

//---

const array = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(array));
// const set = new Set(array);
// set.add('Ivan')
//     .add('Oleg');
// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values());



//--------------------------------------------------
// const bigint = 21321321321321321213213323213132132132132132n;
const sameBigint = BigInt(21321321321321321213213323213132132132132132n);
// console.log(2n > 1n);

let bigint = 1n;
let number = 2;
console.log(bigint + BigInt(number));