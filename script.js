const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querSelector('.ativo');
        const proximoPasso = 'passo-' + this.getTribute('data-proximo');

        atual.classList.remover('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})