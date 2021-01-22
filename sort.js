//Linear search ************
function linearSearch(arr,num){
   if(arr.length <= 0){
       return false;
   }
   for(var i = 0;i <= arr.length;i ++){
       if(arr[i]==num){
           return arr.indexOf(arr[i]);
       }
       else{
           return arr.indexOf(num);
       }
   }
}

//console.log(linearSearch([1,2,3,4,5],7));

//Binary search********
function BinarySearch(arr,num){
var start = 0;
var end = arr.length - 1;
var middle = Math.floor((start + end)/2);
//console.log(start,middle,end);
if(arr[middle] == num){
    return arr.indexOf(num);
}
while (arr[middle] != num){
    if(arr[middle] > num){
       end = middle - 1;
    }
    if(arr[middle]<num){
       start = middle + 1;
    }
    middle = Math.floor((start + end)/2);
    return arr.indexOf(num);
}


}
console.log(BinarySearch([1,2,3,4,5],8));

//algorithm
 //now we are comparing womgwomg with omg
 //first we will loop over the long string
 //next we will loop over the short string
 //we will compare the first character of long to the first of short
 // o of long is compared with o of short now both are same but again as long string is the main loop now o
 // of long string will again compare with the m of long string and then g of long string when we loop over those
 //two strings continuously we see
 /*w o
o m
w g
o o
w m
o g
w o
o m
m g
o o
m m
g g
m o
g m
 */
//no characters are matching this way but if we add i + 1 we can see the characters matching
//now we will compare those matched characters ie .. str1[i + j] to str2[j] if not matched we will break the loop there
//if matched and the value of j = str2.length - 1 that means all characters in j are completed we will increment the counter.

function naiveString(str1,str2){
    var count = 0;
    for(var i = 0;i <str1.length;i ++){
        for(var j = 0;j <str2.length;j ++){
            if(str1[i + j] != str2[j]){
                 break;
            }
            if(j === str2.length - 1){
                //console.log(str2.length );
                console.log("found one");
                count ++;
            }
        }
    }
   return count;
}


console.log(naiveString("omgwomg","omg"));
