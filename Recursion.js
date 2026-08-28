
// ye basic recursion hai yaha function k ander hi function ku call karre isme ak problem hai ki function unlimeted time run hunga jisse ak error ainga "RangeError: Maximum call stack size exceeded" isku overcome karne k liye hame ak condition dena hunga jisse base condition kahte hai jo test2 me bataya hai

// function test (){
//      console.log("hello");
//     test();
// }

// test();


function test2(s) {
    if(s==0){
        return;
    }
    console.log(s);
    
    test2(s-1)
}

test2(5)

function Factorial(n) {

    if(n === 1) {
        return 1;
    }


    return n *  Factorial(n - 1);
}

console.log(Factorial(6));


let numbers = [10, 45, 23, 89, 12];

function FindMax(numbers, index = 0) {

    if (index === numbers.length - 1) {
        return numbers[index];
    }

    let max = FindMax(numbers, index + 1);

    if (numbers[index] > max) {
        return numbers[index];
    } else {
        return max;
    }
}

console.log(FindMax(numbers));