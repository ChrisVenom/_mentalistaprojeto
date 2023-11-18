// Essa função roleta números incluindo o máximo e o mínimo
// Então para ela funcionar ela recebe dois números fornecidos ... no caso um mínimo e um máximo
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Esta variável (constante) recebe o número roletado que por sua ver será roletado pela função antes declarada
// Essa função recebe o 1 como mínimo e o 1000 como máximo
const numeroSecreto = getRandomIntInclusive(1, 1000);
let tentativas = 1;
let chute;

while(chute != numeroSecreto && tentativas < 11){
  chute = prompt('Digite um número entre 1 e 1000.');
  
  // Validação de input
  // o IsNaN verifica se realmente é um número
  if (isNaN(chute) || chute < 1 || chute > 1000) {
    alert('Por favor, digite um número válido entre 0 e 1000.')
    continue;
  }
  
  // Lógica do game
  if (chute == numeroSecreto){
    alert('Acertou!');
    alert('Você acertou depois de: ' +tentativas+ ' tentativas');
    break;
  } else if (chute > numeroSecreto) {
    alert('Errou! ... o número secreto é menor do que ' +chute);
  } else if (chute < numeroSecreto) {
    alert('Errou! ... o número secreto é maior do que ' +chute);
  }
  tentativas++;
}

if(tentativas == 11){
  alert('Você falhou! ... atingiu o número máximo de tentativas. O número secreto era ' +numeroSecreto);
}