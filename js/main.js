function tocaSom(idElementoSom){
    document.querySelector(idElementoSom).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    tecla.onclick = function(){
        tocaSom('#som_'+ instrumento);
    }
    contador = contador +1;

}