window.addEventListener('load', async function () {
  let planos = {
    owner:{},
    agency:{}
  }

  //await montarPlanos()

  let boxesPlanos = document.querySelectorAll('.item-lista-planos')

  boxesPlanos.forEach(boxPlano => {
    
    listenActionsEspecificacoesPlano(boxPlano)

  })

})

function listenActionsEspecificacoesPlano(boxPlano){
  let especificacoes = boxPlano.querySelectorAll('.item-lista-especificacoes');

  especificacoes.forEach(especificacao => {

    let hashItem = especificacao.getAttribute('hash-especifica');
    let btnOpenModalDemonstracao = especificacao.querySelector('#btn-open-modal-demonstracao-'+hashItem)
    let btnCloseModalDemonstracao = especificacao.querySelector('#btn-close-modal-demonstracao-'+hashItem)
    let modalDemonstracao        = especificacao.querySelector('#modal-demonstracao-especificacao-'+hashItem)

    if(btnOpenModalDemonstracao){

      btnOpenModalDemonstracao.addEventListener('click', (e)=>{
        e.preventDefault()
        modalDemonstracao.classList.add('modal-demonstracao-especificacao-opened')
        
      })

      btnCloseModalDemonstracao.addEventListener('click',(e)=>{
        e.preventDefault()
        modalDemonstracao.classList.remove('modal-demonstracao-especificacao-opened')
        
      })

    }
  })
}