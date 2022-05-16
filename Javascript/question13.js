var numbers = [10, 42, 5, 87, 61, 34, 99];
var i = 0;
var e = 0;

//using do-while
do{
    e = e + numbers[i];
    i++;
}while(i < numbers.length);

//using while 

while(i < numbers.length)
{
 
    e = e + numbers[i];
    i++;   
    
}

//using for loop

for(i=0;i<numbers.length;i++)
{
    return e;
}


alert(e);