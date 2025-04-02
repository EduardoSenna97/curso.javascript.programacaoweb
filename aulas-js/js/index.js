document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS</b>!";
alert('Oiieeee');
console.log('Oi isso é um console.log');
/*
JavaScript Interno - entre as tags <body>, escrevo <script>. Entre a abertura e o fechamento dela
eu coloco 'alert('Olá mundo!');
Isto é um comando para sair como um alerta na página. Este código é um java script interno, quando colocamos o js
dentro da própria página.

JavaScript Externo - raiz do projeto -> cria pasta 'js' -> cria um  arquivo (ex.: index.js) -> pegar o comando alerta
e colocar dentro da página index -> para ser rodado preciso referencias esse js dentro da
minha html -> <script src="js/index.js"></script>. (mostrei a localização do arquivo).
Isto é um alerta rodando de uma página externa.

~Colocamos sempre o js no final (antes do fechamento) do body, pois ele afeta diretamente o que aparece dentro do
hmtl, por isso é importante que seja renderizado por último, para que as funções que há dentro tenhamos certeza de que
modificará o html que vem antes da chamada dele. sempre referenciar ele antes do fechamento da tag body



Comandos de saída de dados do JS:
innerHTML - quero que exiba na tela um conteúdo html
document.write - mais usado para testes, ele também aceita informações de funções primitivas (5+5)
alert(10+5); - Aparece a caixa na tela com o valor que ele mandou apresentar
console.log - aparece uma mensagem no console na aba de desenvolvedor do site

Variáveis do Javascript:

-> var - posso retribuir valores novamente para a variável
-> let - torna a variável unica, não pode ser redeclarada (com exceção de escopo local).
-> const - é algo que nunca pode mudar, sempre será isso (independente de escopo, ele não será alterado).



//Declaração de variável
var a,b,c;

//Atribuição de valor
a=2;
b=3;
c=a+b;
alert(c);

var pote = "Bombom";


*/
function eventoClick(){
    alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}