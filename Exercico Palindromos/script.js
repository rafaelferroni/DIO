function palindromo(string){
    if(!string) return(console.log("Digite uma palavra"));
    let eIgual = string.split("").reverse().join("");
    
    eIgual = eIgual.split(" ").join("");
    
    eIgual.toLowerCase() === string.toLowerCase().split(" ").join("") ? console.log("A palavra é palindroma") : console.log("A palavra não é palindroma");
}
//palindromo(prompt("Digite uma palavra"));

function palindromo2(string){
    if(!string) return(console.log("Digite uma palavra"));
    let stringSemEspaco = string.toLowerCase().split(" ").join("");
    
    for (i=0; i < stringSemEspaco.length / 2;i++){
        console.log(stringSemEspaco);
        if (stringSemEspaco[i] !== stringSemEspaco[stringSemEspaco.length - 1 - i]){
            
            return(console.log("A palavra não é palindroma"));
        } 
        
        
    }
    return(console.log("A palavra é palindroma"));
    
    
}
//palindromo2(prompt("Digite uma frase"));

