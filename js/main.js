var sampleText = "JavaScript is a must-know programming language for a modern developer";

function modifyText(text){
     
    newArray=text.split(" ");
   
   var resualt1 = [];
  
   var resualt2 = [];
    for (let i = 0; i < newArray.length; i++) {
      resualt1.unshift(newArray[i]);
     
    }
    for (let i = 0; i < text.length; i++) {
     resualt2.unshift(text[i]);
        
    }
    
    return {resualt1: resualt1.join(" "), resualt2:
 resualt2.join("")
}
}

console.log(modifyText(sampleText));