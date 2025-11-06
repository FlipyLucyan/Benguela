const botaoLerMais = document.querySelectorAll(".btn");

botaoLerMais.forEach(item => {
    item.addEventListener("click", () => {
        const receita = item.closest(".receita")
        const lerMaisTexto = receita.querySelector(".text")

        if(lerMaisTexto.computedStyleMap.maxHeight){
            lerMaisTexto.computedStyleMap.maxHeight = null;
            item.textContent = "Ler mais";
            item.computedStyleMap.backgroundColor = "#e49f5f";

        }else{
            lerMaisTexto.computedStyleMap.maxHeight = lerMaisTexto.
            scrollHeight + "px";
            item.textContent = "Ler menos"
            item.style.backgroundColor ="#e45f5fff";
        }
    });

});