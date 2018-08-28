// ***************JS STRINGS******************
const iAmString = 'hi';


// *******CONDITIONAL STATEMENTS*******
const age = 99;

if (age < 21) {
    console.log('you cant come inside');
} else {
    console.log('you can come inside');
}

// other way of writing above conditional
if (age >= 21) {
    console.log('partayyy');
} else {
    console.log('bring your fake id next time');
}

// using else if in conditional
if (age < 21) {
    console.log('you cant come inside');
} else if (age > 75) {
    console.log('youre too old');
} else {
    console.log('partayyyy time');
}

// using booleans
const authenticated = false;

if (authenticated) {    //same as writing if (authenticated === true)
    console.log('you are logged in');
} else {
    console.log('you need to log in');
}

// difference between == and ===
const a = 1;
const b = '1';

// a === b // false bc checking data & value type
// a == b // true bc just checking data

// a !== b // true bc a is not equal to b
// a != b // false bc just checking data aka value


// semi-complex conditional
const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if(favoriteAnimal === 'bear' && favoriteColor === 'blue'){
    console.log('welcome to the club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'red') {
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

// other example
if(favoriteAnimal === 'bear' && favoriteColor === 'red'){
    console.log('welcome to the club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'blue') {
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

// prototype example
const hiDiv = document.getElementById('hi');
console.log(hiDiv);


// *********************STRING METHODS************************
const pie = 'peach';
console.log('pie length: ', pie.length);
// what is the index value of the 3rd letter (aka 2nd index)
console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat'));  // -1 aka no cat
console.log('indexof pea', pie.indexOf('pea'));  // 0 

// replace method
const quote = 'winter is coming';
// takes 2 arguments (what are u looking for, what to do you want it to be)
const newQuote = quote.replace(/is/g, "ain't");   // regular expression = // global=g
console.log('newQuote: ', newQuote);
// to learn more about regular expressions go to rubular.com

