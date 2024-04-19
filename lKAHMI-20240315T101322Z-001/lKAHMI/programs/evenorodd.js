var digits = [1, 2, 4, 5, 9, 15];
var evens = 0;
var odds = 0;
for (var i = 0; i < digits.length; i++) {
    console.log('--------------------start -------------------------')
    if (digits[i] % 2 == 0) {
        evens = evens + 1
        console.log('evens : ', evens, 'odds:', odds);
    } else {
        odds = odds + 1;
        console.log('evens : ', evens, 'odds:', odds);
    }
    console.log('-----------------end----------------------------')
}

console.log("THis count of evens is", evens);
console.log("THis count of odds is ", odds);





var digits = [1, 2, 1, 1, 2, 1, 2, 1];

var ones = 0;
var twos = 0;

for (var i = 0; i < digits.length; i++) {
    console.log('--------------------start -------------------------')
    if (digits[i] == 1) {
        ones = ones + 1;
        console.log('ones : ', ones, 'twos:', twos);
    } else  {
        twos = twos + 1;
        console.log('ones : ', ones, 'twos:', twos);
    }
    console.log('-----------------end----------------------------')
}
console.log("THis count of ones is", ones);
console.log("THis count of twos is ",twos);



var digits = [1, 2,10,15,9,7,18,25];

var g10 = 0;
var les10 = 0;

for (var i = 0; i < digits.length; i++) {
    if (digits[i] >10) {
        g10 = g10 + 1;
        
    } else  {
        les10 = les10 + 1;
        
    }
    
}
console.log("THis count of ones is", g10);
console.log("THis count of twos is ",les10);


