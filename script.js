
 document.addEventListener('submit', function( evento ){
    
    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
    }

    console.log(objeto);



 });