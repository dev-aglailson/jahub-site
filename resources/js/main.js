window.addEventListener('load', function () {
  const cabecalho = document.querySelector('.container-cabecalho')
  var alturaCabecalho = cabecalho.offsetHeight
  var posicaoScrollAtual = 0
  let gridPrincipal = document.querySelector('.container-principal')
  let main = document.querySelector('main')

  /* 
  A primeira section do grid principal e das tags main deve ter um padding-top 
  para descontar a altura do cabecalho
  */

  let primaryChild = main.children[0]

  primaryChild.style.paddingTop = alturaCabecalho + 'px'



  //Eventos de scroll
  window.addEventListener('scroll', function () {


    posicaoScrollAtual = window.scrollY

    voltaTopo(posicaoScrollAtual)

  })


  //FUNÇÕES

  function voltaTopo(posicaoScrollAtual) {

    let btn = document.querySelector('.btn-volta-top')

    if (posicaoScrollAtual > (100 / (1 / 2))) {

      btn.classList.add('btn-volta-top-visivel')

      btn.addEventListener('click', function () {

        window.scrollTo({
          top: 0 - alturaCabecalho,
          left: 0,
          behavior: 'smooth'
        })

      })

    } else {
      btn.classList.remove('btn-volta-top-visivel')
    }

  }

  //ANIMAÇÃO ACRODION SEÇÃO SOBRE
  function secaoSobreItensAcordion(){
    var listaVantagens = document.getElementById('lista-vantagens-section-sobre');

    let btnsVantagens = listaVantagens.querySelectorAll('.title-item');
    let detalhesItens = listaVantagens.querySelectorAll('.content-item');

    let itensLi = listaVantagens.querySelectorAll('.item-lista');
    itensLi[0].style.borderLeft = '3px solid #00aaff';
    detalhesItens[0].style.maxHeight = detalhesItens[0].scrollHeight + 'px';

    btnsVantagens.forEach(btnItem => {

      btnItem.addEventListener('click', function () {

        var liItem = btnItem.closest('.item-lista');
        var detalheLiItem = btnItem.nextElementSibling

        let alturaDivDetalheLiItem = !!detalheLiItem.style.maxHeight

        if (alturaDivDetalheLiItem) {
          detalheLiItem.style.maxHeight = null;
          liItem.style.borderLeft = '3px solid #d1d5db';
        } else {

          detalhesItens.forEach(detalhe => {

            let altura = detalhe.style.maxHeight;

            if (altura) {
              detalhe.style.maxHeight = null;


              const li = detalhe.closest('.item-lista');
              li.style.borderLeft = '3px solid #d1d5db';

            }
          })

          detalheLiItem.style.maxHeight = detalheLiItem.scrollHeight + 'px';
          liItem.style.borderLeft = '3px solid #00aaff';
        }
      })

    })

  }

  secaoSobreItensAcordion()

})