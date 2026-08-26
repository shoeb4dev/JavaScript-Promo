
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

try{

    let age = 19 ;

    if (age < 18) {
        throw new Error("You are a minor");
        
    }

    console.log("Adult");
}catch  {
    console.log("something wrong");
    
}