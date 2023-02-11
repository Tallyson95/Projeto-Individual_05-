var readlineSync = require('readline-sync');

var lista = [];
var nome = readlineSync.question('Qual é o seu nome? ')
i=0;

while(resp =='sim' || resp == 'sim'){
    var PropCss = readlineSync.question('Digite uma propriedade do CSS: ');
    var resp = readlineSync.question('Deseja adicionar mais propriedades? [SIM / SAIR]: ')
    lista[i] = PropCss
    i++;
}

console.log(' ')
console.log(`Sr(a) ${nome} essa é a lista de propriedades que você escolheu: `);
console.log(' ')
for(i=0; i<lista.length;i++){
    console.log(lista.sort()[i]);

}
console.log(' ')
console.log('FIM DO PROGRAMA!!!')