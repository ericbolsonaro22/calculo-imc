let resposta = document.getElementById('resposta')
console.log(resposta)

function calcular(){
    let altura = Number (document.getElementById('altura').value)
    let peso = Number (document.getElementById('peso').value)
    let nome = document.getElementById('nome').value

    console.log(altura)
    console.log(peso)
    console.log(nome)

    //Fazendo o cálculo do IMC

    let imc = peso / (altura * altura)
    console.log(imc)

    if ((imc > 0) && (imc < 17)){
        resposta.innerHTML = 'O paciente ' + nome + ' está muito abaixo do peso!'
    }
    else if((imc>=17) && (imc < 18.5)){
        resposta.innerHTML = 'O paciente ' + nome + ' está abaixo do peso!'
    }
    else if((imc >= 18.5) && (imc < 25)){
        resposta.innerHTML = 'O paciente ' + nome + ' está com o peso normal!'
    }
    else if((imc >= 25) && (imc <30)){
        resposta.innerHTML = 'O paciente ' + nome + ' está acima do peso!'
    }
    else if((imc >=30) && (imc < 35)){
        resposta.innerHTML = 'O paciente ' + nome + ' está com Grau de Obesidade I!'
    }
    else if((imc >=35) && (imc <= 40)){ 
        resposta.innerHTML = 'O paciente ' + nome + ' está com Grau de Obesidade II!'
    }
    else if(imc > 40){
        resposta.innerHTML = 'O paciente ' + nome + ' está com Grau de Obesidade III!'
    }
    else{
        resposta.innerHTML = "Você Digitou um Valor inválido!"
    }
    resposta.innerHTML += '<br> O IMC do paciente é igual a ' + imc.toFixed(2)
}