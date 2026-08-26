

// return statement jaha diye uske phle ka hi code run karta hai uske bad ka skip kardeta hai 
function demo(){
    console.log("Hello World");
    return;
    console.log("bye");
    
}

demo();


//continue current program ku skip kardeta or uske bad continue karta hai jaise yaha 3 ku skip kardiya magar age 4 print karra lkn break condition ku wahi stop kardeta hai or uske bad ka code ku execute nahi karta jaise yaha 7 ku break kardiya or age 8 print nahi hoga

for(let a=1 ; a<=10; a++){
    if(a==3){
        continue;
    }
    if(a==7){
        break;
    }
    console.log(a);
}
