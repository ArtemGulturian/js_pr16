'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// for (const key of user) {
//     console.log(key);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function(){};

// console.dir(arr);

// for (const key of arr) {
//     console.log('arr = ', key);
// }

// const str = 'string';
// for (const key in str) {
//     console.log('string = ',str[key]);
// }

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayhello: function(){
        console.log('Hello');
    }
};

salaries[Symbol.iterator] = function() {
    return{
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else{
                return {done: true};
            }
            
        }
    }
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }

// let it = '46546458844515326';


// for (let i = 0; i < lengthOfString; i++) {
//     if (i >= lengthOfString-4){
//         console.log(i);
//     }
// }



// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
function hideTheNumberOfCard(it){
    let i = 0;
    let str = '';
    let st = '';
    const lengthOfString = it.length;
    for (let values of it){

        // console.log(values);
        i++;
        if (i >= lengthOfString - 3){
            values = '*';
        }
        // console.log('i = ', i);
        // console.log('values = ', values);
        if (i % 4 === 0){
            values += ' ';
        }
        str += values;
        
    }
    console.log(str);
}

console.log(hideTheNumberOfCard('4654645884415326'));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
function hideTheFirstNumberOfCard(it){
    let i = 0;
    let str = '';
    let st = '';
    const lengthOfString = it.length;
    for (let values of it){

        // console.log(values);
        i++;
        if (i <= lengthOfString - 4){
            values = '*';
        }
        // console.log('i = ', i);
        // console.log('values = ', values);
        if (i % 4 === 0){
            values += ' ';
        }
        str += values;
        
    }
    console.log(str);
}

console.log(hideTheFirstNumberOfCard('4654645884415326'));