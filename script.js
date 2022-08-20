function calculomedia( numeros ) {
    
    let soma = 0;
    for( c = 0; c < numeros.length; c++) {
        soma += numeros[c];
    }

    media = soma / numeros.length;

    return media;
}
 
 
 document.addEventListener('submit', function( evento ){
    
    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let numeros = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        numeros.push(parseInt(dados.get(key)));
    }

    console.log(numeros)

    console.log(objeto);

    texto = calculomedia(numeros)

    document.getElementById("resultado").innerHTML = "O resultado foi : " + calculomedia(numeros)

 });

 