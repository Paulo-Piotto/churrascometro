function calc(){
    let ad = document.getElementById("adultos").value;
    let cr = document.getElementById("criancas").value;
    let dr = document.getElementById("duracao").value;
    let carne;
    let bebida;
    let cerveja;

    if(dr >= 6){
        carne = (ad*650 + cr*650*0.5)/1000;
        bebida = (ad*1500 + cr*1500*0.5)/1000;
        cerveja = (ad*2000)/1000;
    }
    else{
        carne = (ad*400 + cr*400*0.5)/1000;
        bebida = (ad*1000 + cr*1000*0.5)/1000;
        cerveja = (ad*1200)/1000;
    }

    // poderia usar .tofixed() para formatar o numero
    carne = carne.toFixed(2);
    cerveja = cerveja.toFixed(2);
    bebida = bebida.toFixed(2);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<p> ${carne} Kg de Carne<p>`; 
    resultado.innerHTML += `<p> ${cerveja} L de Cerveja<p>`;
    resultado.innerHTML += `<p> ${bebida} L de Bebida<p>`;


}