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

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// Создайте функцию unique(arr), которая вернёт массив уникальных,
// не повторяющихся значений массива arr.

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    console.log(Array.from(values));
    return Array.from(new Set(arr));
}
console.log(unique(values));
//---
function f() {
    return Array.from(new Set(arguments)).sort();
}
console.log(f(1, 2, 4, 1, 3, 2, 1, 3));
 
// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
    let sorted;

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
        console.log(map);
    }
    return Array.from(map.values());
}
console.log(aclean(arr));

//---

let map = new Map();
map.set("name", "John");
// console.log(map);
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *

function amountOfPages(summary){
    let n ='';
    let x=0;

    for (let i = 1; i <= summary; i++) {
        n += i;
        if (n.length === summary) {
            x = i;
            break;
        }
    }
    console.log('our number = ', x);

    let as = String(summary);

    if (as.length == 1){
        x = n[summary - 1];
    } else
    if (as.length == 2) {
        x = `${n[summary - 2]}${n[summary - 1]}`;
    } else
    if (as.length == 3) {
        x = `${n[summary - 2]}${n[summary - 1]}`;
    } else
    if (as.length == 4) {
        x = `${n[summary - 3]}${n[summary - 2]}${n[summary - 1]}`;
    }
    return Number(x);
}
console.log(amountOfPages(1095));

function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
  }
console.log(amountOfPages(1095));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue;
            if (s === 65 + c || s === 97 + c) continue letters;
        }
        return false;
    }
    return true;
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *

function deepCount(a) {
    // let q = 0;
    // for (let i = 1; i <= a.length; i++) {
    //     q = i;
    // }
    // console.log(q);

    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}
console.log(deepCount(["1", 5, "3", ["10"]]));

function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// You will be given a number and you will need to return it as a string in Expanded Form.
// For example: expandedForm(12); Should return '10 + 2'

function expandedForm(num) {
    let res = '';
    let string = String(num);
    let q = 0;
    
    for (let i = 1; i <=string.length; i++) {
        q = i;
    }
    if (q == 2) {
        let a = num % 10;
        let b = num - a;

        res += `${b} + ${a}`;
    }
    if (q == 3) {
        let a = num % 10;
        let b = (num % 100) - a;
        let c = num - (num % 100);

        res += `${c} + ${b} + ${a}`;
    }
    if (q == 4){
        let a = num % 10;
        let b = (num % 100) - a;
        let c = (num % 1000) - b - a;
        let d = num - (num % 1000);
        if (b != 0){
            res += `${d} + ${c} + ${b} + ${a}`;
        }
        if (b == 0){
            res += `${d} + ${c} + ${a}`;
        }
    }
    if (q == 5){
        let a = num % 10;
        let b = (num % 100) - a;
        let c = (num % 1000) - (num % 100) - a;
        let d = num - (num % 1000) - (num - (num % 10000));
        let e = num - (num % 10000);
        if (b != 0){
            res += `${e} + ${d} + ${c} + ${b} + ${a}`;
        }
        if (b == 0){
            res += `${e} + ${d} + ${c} + ${a}`;
        }
        if (d == 0 && b == 0){
            res += `${e} + ${c} + ${a}`;
        }
    }
    if (q == 6){
        let a = num % 10;
        let b = (num % 100) - a;
        let c = (num % 1000) - b - a;
        let d = num - (num % 1000) - (num - (num % 10000));
        let e = num - (num % 10000) - (num - (num % 100000));
        let f = num - (num % 100000);
        if (b != 0){
            res += `${f} + ${e} + ${d} + ${c} + ${b} + ${a}`;
        }
        if (b == 0){
            res += `${e} + ${d} + ${c} + ${a}`;
        }
    }
    if (q == 7){
        let a = num % 10;
        let b = (num % 100) - a;
        let c = (num % 1000) - b - a;
        let d = num - (num % 1000) - (num - (num % 10000));
        let e = num - (num % 10000) - (num - (num % 100000));
        let f = num - (num % 100000) - (num - (num % 1000000));
        let g = num - (num % 1000000);
        if (b != 0){
            res += `${g} + ${f} + ${e} + ${d} + ${c} + ${b} + ${a}`;
        }
        if (b == 0){
            res += `${e} + ${d} + ${c} + ${a}`;
        }
    }
    return res;
}
console.log(expandedForm(70304));
console.log(expandedForm(4982342));

// ----- 

function expandedForm(num) {
    let res = '';
    let n = '';
    let arr = [];

    let desyatye = num % 10;
    arr.push(desyatye);
    let sotie = num % 100;
    arr.push(sotie);
    let tysiachnie = (num % 1000) - (num % 100) - (num % 10);
    arr.push(tysiachnie);
    
    console.log(arr);

    for (let val of arr){
        if (val > 0){
            res += `${tysiachnie} + ${sotie-desyatye} + ${desyatye}`;
        }
    }
    return 'res = '+res;
}
console.log(expandedForm(7004));


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
        for (let i = 0; i < data.length; i++){
            
            if (typeof(data[i]) === 'string'){
                data[i] = `${data[i]} - done`;
            } else
            if (typeof(data[i]) === 'number'){
                data[i] = data[i] * 2;
            }
        }
    return data;
}
console.log(secondTask([5, 10, 'Shopping', 20, 'Homework']));

//----

function peramid() {
    const lines = 7;
    let result = '';

    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++){
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++){
            result += "*";
        }
        for (let j = 0; j < 2 * i + 0.5; j++){
            result += " ^.";
        }
        result += '\n';
    }
    return result;
}
console.log(peramid());

// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
    let q = 0;
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcLow = abc.toLocaleLowerCase();
    let w = x.split(' ');

        for (let i = 0; i <= w.length; i++) {
            for (let j = 1; j <= abcLow.length; j++) {
                if (x[i] === abcLow[j]){
                    q = j;
                }
            }
        }
        console.log(q);
        // console.log(w[0]);
        // console.log("w[1] = ", w[1]);
        // console.log(w[2]);
        // console.log(w[3]);
        // console.log(w[4]);
        // console.log(w[5]);
}
console.log(high('man i need a taxi up to ubud'));

function high(x) {
    let q = 0;
    let abc = 'Aabcdefghijklmnopqrstuvwxyz';
    let abcLow = abc.toLowerCase();
    let w = x.split(' ');
    let zx = [];
    let qw=0;

    for (let val of w) {
        // console.log(val);
        for (let i = 0; i < val.length; i++) {
            for (let j = 0; j <= abc.length; j++) {
                if (val[i] == abc[j]){
                    q += j;
                    // console.log(j);
                }
            }
        }
        zx.push(q); q = 0;
        // console.log(zx);
    }
    let maxNumber = Math.max.apply(null, zx);

    for (let i = 0; i < zx.length; i++) {
        if (zx[i] === maxNumber){
            qw = i;
        }
    }
    for (let i = 0; i < zx.length; i++){
        if (zx[i] === zx[i+1]){
            qw = 0;
        }
    }
    let as = String(w[qw]);
    return as;
}
console.log(high('j t a a'));



// * * * * * * * * * * * * * *

// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// #Find the missing letter / Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case. Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
    let q = 0;
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcLow = abc.toLocaleLowerCase();

    for (let i = 0; i <= w.length; i++) {
        for (let j = 0; j <= abcLow.length; j++) {
            if (x[i] === abcLow[j]){
                q = j;
            }
        }
    }
    console.log(q);

  
    return ' ';
}