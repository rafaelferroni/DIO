// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
const setFig = new Set()

for(let i; i<numFigCompradas;i++){
  const fig = parseInt(gets());
  if (!setFig.find(fig)){
    setFig.add(fig);
  }
  
}

print(numTotal - setFig.size);