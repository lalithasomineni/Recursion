//print consecutive numbers in ascending order
function printnumbers(num){
    if(num>=6){
        console.log("completed..");
        return;
    }
    console.log(num);
    num++;
    printnumbers(num);
}
printnumbers(0);
//sum of consecutive numbers
function sumRange(num){
    if(num == 1){
        return 1;
    }
    return num + sumRange(num-1);
}
console.log(sumRange(5));
//5 + sumRange(4); from line 20 5+10 = 15
//4 + sumRange(3); from line 21 6+4=10
//3 + sumRange(2); from line 23 3+3= 6
//2 + sumRange(1);
//2+1 =3;

//sum of consecutive even numbers

function evenSum (num){
   if(num % 2 != 0 || num <= 0){
       return false;
   }
   return num + evenSum(num - 2);
}
console.log(evenSum(7));
//6+4+2 = 12

//sum of consecutive odd numbers

function oddSum (num){
   if(num % 2 == 0 || num <= 0){
       return false;
   } 
   return num + oddSum(num - 2);
}
console.log(oddSum(5));
//5 + 3 + 1 = 9

