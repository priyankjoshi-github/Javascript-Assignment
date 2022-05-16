var arr = [];

for(var i=0;i<=100;i++)
{
  arr.push(Math.round(Math.random() * 100))
}

document.write(arr);

console.log(
Math.max(...arr)
)

console.log(
Math.min(...arr)
)

let evens = arr.filter(arr => arr % 2 ==0)

console.log(evens);

let odds = arr.filter(arr => arr % 2 !=0)

console.log(odds);

var sum = 0;

for (var n of arr)
{
  sum += n;
  avg = sum/arr.length;
}
console.log(sum);

console.log(avg);