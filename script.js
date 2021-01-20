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

//factorial
function factorial (num){
    if(num == 0 || num < 0){
        return false;
    }
    if (num == 1){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

//factorial(3)
//3 * factorial (2)

//iteration
function iterateFactorial(num){
     var product = 1;
    for (var i = 1;i <= num;i++){
        product = product * i;
    }
    return product;
}
console.log(iterateFactorial(5));

//find odds in an array 
//using iteration and recursion at a time.
function findOdds(arr){
    let result = [];
    for(var i = 0;i < arr.length;i ++){
        if(arr[i]%2 != 0){
            result.push(arr[i]);
            console.log(i);
        }
    }

    return result;
}
console.log(findOdds([1,2,3,4,5]));

//using helper method
function odds(array){
    let result = [];
    function helper (arr){
       if(arr.length == 0){
           return;
       }
       if(arr[0]%2!=0){
           result.push(arr[0]);
       }

       helper(arr.slice(1));
       //helper(arr);
    }
    helper(array);
    return result;
}
console.log(odds([1,2,23,33,4]));

//odds calls the helper function
//array is passed to the helper function
//base cases 1.array length cannnot be zero 2.array[0]%2 cannot be zero
//if arr[0]%2 is not equal to zero then we are pushing it into the results array
//after that we slice the array and pass it back to the helper again.
//thus the helper returns result when when arrasy lengtjh is zero


//now implementing the same using pure recursion

function evenspure(arr){
  let result = [];
  if (arr.length == 0){
      return arr;
  }
  if(arr[0]%2 == 0){
      result.push(arr[0]);
     }
    return result.concat (evenspure(arr.slice(1))); 
      
}
console.log(evenspure([2,3,4]));

//math.pow

function power (a,b){
  if(b == 0){
      return false;
  }
  if(b == 1){
      return a;
  }
  return a = a * power(a,b-1);
}
console.log(power(2,3));
// zero times multiply itself is the base case 
//we will return the number and we pass it again to the number  2 * power(2,2)
//we will return 2 * power (2,1)
//we will returb 2 * 2* 2

//factorial

function factorial(num){
    //4! = 4 * 3 * 2 *1;
    //base cases if num is zero return 1
    //if number is 1 return num
    //return num * num-1
    if(num == 0){
        return 1;
    }
    if(num == 1){
        return num;
    }
    return num * factorial(num - 1);
}
console.log(factorial(4));

//product of an array

function productOfArray(arr){
    if(arr.length == 0){
        return 1;
    }
 return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([5,2]));

//recursive addition
function recursiveRange(num){
    if(num == 0){
        return num;
    }
    return num + recursiveRange(num - 1);
}
console.log(recursiveRange(3));
//3 + 2 + 1 = 6

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(5));
// 1 2
// 1 2 3
// 1 2 3 6
//n = 5;
//fib(4) + fib(3);
//fib(3) + 1 + 1 + 1
//1 + 1

function reverse(str){
    let reversed;
    if(str.length == 1 || str.length < 1){
        return str;
    }
    return reversed = reverse(str.slice(1)) + str[0];

}
console.log(reverse("al"));



function isOdd(arr){
    if(arr.length <= 0){
        return false;
    }
    if(arr[0]%2 != 0){
        //console.log(arr);
        arr = arr.slice(1);
        //console.log(arr);
        isOdd(arr);
        return true;
    }
    if(arr[0]%2 == 0){
        arr = arr.slice(1);
        return isOdd(arr);
    }
   
}
console.log(isOdd([2,8,4]));


