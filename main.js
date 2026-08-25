
    const botoes = document.querySelectorAll("button");

    botoes.forEach(function(boton) 
        text.textContent++;
        curtiu=true;
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);

        function botoaClicado (){
            console.log("fui clicado");
            let texto = botao.querySelectorAll("span");

            if(curtiu===false) {
                texto.textContent++;
                curtiu=true;
            }else{
                texto.textContent--;
                curtiu=false;
            }
        
})


