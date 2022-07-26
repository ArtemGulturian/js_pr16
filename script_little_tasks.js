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

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// Write a function that accepts an array of 10 integers
// (between 0 and 9), that returns a string of those numbers
// in the form of a phone number.
// returns "(123) 456-7890"

function returnCorrectPhoneNumber (it) {
    let i = 0;
    let str = '';
    let st = '';
    const lengthOfString = it.length;

    for (let i = 0; i < it.length+1; i++){
        if (i == 0) {str += '('; i=1;}

        str += i;
        
        if (i == 3) {str += ') ';}
        if (i == 6){str += '-';}
        }

    console.log(str);
    //return str;
}
console.log(returnCorrectPhoneNumber('1234567890'));

//---

function returnCorrectPhoneNumber (it) {
    let i = 0;
    let str = '';
    let st = '';
    let lengthOfString = it.length+2;

    for (let value of it){
        if (i == 0) {str += '('; i=1;}
        i++;
        if (i < lengthOfString) {
            str += value;
        }
        if (i == 4) {str += ') ';}
        if (i == 7) {str += ' - ';}
    }

    return str;
}
console.log(returnCorrectPhoneNumber('1234567890'));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space,
// and highest number is first.

function highAndLow (numbers) {
    let res = '';
    let array = [];
    let str = numbers;
    let newstr = str.replace(/\s/g, ',');
    let z = newstr.split(',');
 
    for (let val of z){
        val = val * 1;
        array.push((val));
    }
    const maxNum = Math.max.apply(null, array);
    const minNum = Math.min.apply(null, array);
    const r = String(`${maxNum} ${minNum}`);
    return r;
};
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 15 -3 4 2"));
console.log(highAndLow("1 9 3 4 -5"));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// You are going to be given a word. Your job is to return the middle
// character of the word. If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
    let res = '';
    let lengOfWord = s.length;

    for (let i = 0; i < lengOfWord; i++) {
        if (lengOfWord % 2 === 0){
            res = s.charAt((lengOfWord/2)-1) + s.charAt(lengOfWord/2);
        } else if (lengOfWord % 2 != 0){
            res = s.charAt(lengOfWord/2);
        }
        
    }

    return res;
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// Complete the function that accepts a string parameter, and reverses each
// word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    let s = '';
    let arr = [];
    // let re = /(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/;
    // let newstr = str.replace(re, "$4, $3, $2, $1");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' '){
            arr.push(i);
        }
        s = str.replace();
    }
    console.log(arr);
    
    //return newstr;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));


// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// In this kata you are required to, given a string, replace every letter
// with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(t) {
    let s="";
    let abc = "Aabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < abc.length; j++){
            if (t[i].toLowerCase() == abc[j] ){
                s += String(`${j} `);
            }
        }
    }
    let a = s.slice();
    return a;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
//---
let abc = "Aabcdefghijklmnopqrstuvwxyz";
console.log(abc.slice(0, -1));

