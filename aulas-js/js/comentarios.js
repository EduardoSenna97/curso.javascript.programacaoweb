/*Operadores:
Atribuem valores, comparam, e executam operações aritméticas e muito mais. 

São os sinais: + - * / = ++ - += && || etc...

São separados em 6 categorias:

Operadores aritméticos (matemáticos)
Operadores de atribuição
Operadores de sequência
Operadores de comparação
Operador Condicional (ternário)
Operadores lógicos

Op. Matemáticos:

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 valor2;

alert(total);

total = ++valor1;

alert(total); 

Op. Atribuição: 

valor3 = 8;

valor1 += valor2 ;

valor1="Dimitri";
valor2="Teixeira";
total = valor1 + valor2;

Op. Comparação: verdadeiro ou falso

total=(valor1 == valor2);

valor1 = 8;
valor2 = "8";

total2 = (valor1 == valor2);  / true
total2 = (valor1 === valor2);   / false

3 sinais de '=' compara até mesmo os tipos de variáveis. 

Op. Ternário:

var idade, eleitor, resultado;
idade=18;
eleitor=*(idade<18) ? "Não eleitor": "Sim eleitor";
resultado = (idade>60 && idade<70) //true //false
resultado = !(idade>60 && idade<70) //true //false
-------------------------------------------------------

FUNÇÕES: uma função é um bloco de código para executar uma tarefa específica, como se fossem mini programas. 

function soma(valor1,valor2){
    return valor1+valor2;

}

    document.getElementById("texto").innerHTML = soma(10,23);  //aqui estou invocando essa função

function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08

var total = realParaDolar (valorReal, cotacao);

alert(total);


function alertaHello(){
    alert("Olá pessoal!");
}

(escrever no index.html):

<button onclick="alertaHello()">Clique aqui</button>

alertHello();   

/ aqui estou chamando a função; os parenteses servem para me dizer que estou chamando ela. 

function paraCelsius (valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert("A temperatura é de" + x);

------------------------------------------------
OBJETOS: 
objetos são basicamente variáveis com muitos valores dentro. Ex.:

    const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados de propriedades. O objetos podem ter métodos; um método é uma função colocada dentro de uma propriedade. 

const carro = {marca:"ford", modelo:"ka", ano:2015, placa:"abc-1234"};

Método - é uma função colocada dentro de uma propriedade

buzina: function(){ alert 'Biiiiiiiiiiii'}

console.log(carro); 

/ carro.ano ~ pega um valor específico. 

/posso escrever também assim: console.log(carro["marca"]);

Chamando o objeto:

carro.buzina();

completo: function(){
    return "A marca é" +this.marca+ " e o modelo é " + this.modelo
}

console.log(carro.completo);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EVENTOS:
São as ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que torna as páginas interativas e dinâmicas. Existem muitos deles, mas seguem os mais utilizados:

onclick - Disparado quando recebe um click.

ondblclick - Disparado quando clique duplo.

onmouseover - disparado quando o mouse está sobre.

onmouseout - disparado quando o mouse é movido para fora do elemento.

onmousemove - disparado quando o mouse é movido no elemento.

onmousedown - disparado quando o click do botão foi pressionado.

onmouseup - disparado quando o clique do botão é liberado.

onfocus - disparado quando o elemento recebe o foco. Válido para input, s

onchange - disparado quando existe uma mudança no conteúdo. "Ao mudar".

onblur - disparado quando o elemento perde o foco

onkeydown - disparado quando uma tecla é pressionada.

onkeypress - disparado quando uma tecla é pressionada e solta.

onkeyup - disparado quando uma tecla é solta sobre um elemento.

onload - disparado quando a página terminou de ser carregada. Body.

onresize - disparado quando há um redimencionamento da janela. 


Os testes seguirão no index.html

*/