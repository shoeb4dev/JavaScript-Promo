
//  yaha pe agar me s ku defiine na karru to try block nhi run hoga uske badle catch block run hojainga javaScript me agr me bina define karre ke variable use karta hu to wo error dedega or niche ka code bhi run nhi hoga lkn yaha aisa nhi hoga agr bina define kiye hoa main usse try catch me use karta hu to koi error nhi aiga catch run hoga or next line bhi run hojainge or finally jo hai wo hamesha run hota hai chahe try execute ho ya na ho
let s = "Hello World";

try{
    console.log(s);
} catch(err){
    console.log("something went wrong");
} finally{
    console.log("this will run no matter what");
}


// isme maine if statement jo throw use kiya hai uski wajah se niche ka jo console hai adult ka uske wo skip kart=diya agar me throw ki jagah simple console use karta to wo minar or adult dono print kardeta iska mtlb throw jb use hora to next line wo execute hone nhi dera

// try{

//     let age = 0 ;

//     if (age < 0) {
//         throw new Error("Negative number");
        
//     }

//     console.log("Valid Number");
// }catch(err)  {
//     console.log("something wrong");
    
// }finally{
//     console.log("program end")
// }


// try {

//     console.log("A");

//     throw new Error("Problem");

//     console.log("B");

// }
// catch(error) {

//     console.log("C");

// }
// finally {

//     console.log("D");

// }



try {
    let number = -9
  if (number < 0) {
    throw new Error("Negative number");
  }

  console.log("Valid Number");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Program End");
}