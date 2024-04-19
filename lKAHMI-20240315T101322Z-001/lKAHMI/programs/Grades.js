var marks = [96, 50, 86, 15, 34, 7, 35, 25, 100];

var d90 = 0;
var f70 = 0;
var s50 = 0;
var t30 = 0;
var fail = 0;

for (var i = 0; i < marks.length; i++) {

    if (marks[i] > 90) {
        d90 = d90 + 1;
    } else if (marks[i] < 90 && marks[i] > 70) {
        f70=f70+1;
    } else if (marks[i] <=70 && marks[i] > 50) {
       s50=s50+1;
    } else if (marks[i] <= 50 && marks[i] > 35) {
       t30=t30+1;
    } else if (marks[i] <= 35) {
        fail=fail+1
          }
}


console.log(' No of distince',d90);
console.log(' No of frist class',f70);
console.log(' No of second class',s50);
console.log(' No of third class',t30);
console.log(' No of fail',fail);




const heights = [1, 5, 8, 4, 6, 7, 34];
const heightToCheck = 8;

if (heights.includes(heightToCheck)) {
    console.log(`Height ${heightToCheck} exists in the array.`);
} else {
    console.log(`Height ${heightToCheck} does not exist in the array.`);
}

