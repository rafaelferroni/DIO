let num1 = Number(prompt('Digite seu primeiro número'));
let num2 = Number(prompt('Digite seu segundo número'));

function verifica(num1interno, num2interno){
    let soma = num1interno+num2interno;
    if (num1interno === num2interno){
        alert(`${num1interno}  é igual a ${num2interno}`);
    }else{
        alert(`${num1interno} é diferente de ${num2interno}`);
    }
    if (num1interno + num2interno > 10){
        
        alert('A soma dos números é maior que 10');
        alert(`A soma dos números é ${soma}`);
        if(num1interno + num2interno < 20){
            alert('A soma dos dois números é menor que 20');
        }else{
            alert('A soma dos números é maior que 20');
        }
    }else{
        alert(`A soma dos números é ${soma}`);
        alert('A soma dos números é menor que 10');
    }
}
verifica(num1,num2);