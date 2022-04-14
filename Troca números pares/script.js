function trocaPares(string){
    if(!string.length) return(console.log("-1"));
    if(!string) return(console.log("-1"));    
    let corrigeString = string.split(' ').join('');
    
    for(let i = 0; i <corrigeString.length; i++){
        
        if(corrigeString[i] === 0){
            console.log("Você já é 0");
        }else if(corrigeString[i] % 2 === 0){
            //Pq a variável abaixo não atualiza o valor para 0?
            console.log(`Substituindo ${corrigeString[i]} por 0...`);
            corrigeString[i] = 0;
        }
    }
    
    return corrigeString;

}
console.log(trocaPares(prompt("Digite uma sequência de números separados por virgular")));