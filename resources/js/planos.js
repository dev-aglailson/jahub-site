window.addEventListener('load', async function () {

  await montarPlanos(dataPlanos)

  let boxesPlanos = document.querySelectorAll('.item-lista-planos')

  boxesPlanos.forEach(boxPlano => {
    listenActionsEspecificacoesPlano(boxPlano)

  })
})

const dataPlanos = {
  owner:{
    hash:'owner',
    cor:'#00aaff',
    titulo:'Básico',
    preco_de:89.90,
    preco_por:69.90,
    descricao:'Ideal para quem quer começar no mercado de mídia indoor ou divulgar ofertas do próprio negócio de forma profissional.',
    label_btn_acao:'Começar agora',
    especificacoes:{
      checkout:{
        hash:"checkout",
        label:'Checkout de Anúncios para possiveis anúnciantes',
        descricao:'Anunciantes contratam exibição em suas TVs e realizam o pagamento automaticamente pela plataforma.',
        detalhes_modal:{
          descricao:'Com a funcionalidade monetização ativada, anunciantes contratam exibição em suas TVs e realizam o pagamento automaticamente pela plataforma, com sua comissão já calculada e contabilizada conforme a porcentagem acordada.',
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/checkout-rapido.jpg",
              alt:"imagem 1"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/confgis-monetizacao.jpg",
              alt:"imagem 2"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/listagem-repasses.jpg",
              alt:"imagem 3"
            }
          ]
        }
      },
      monitoramento:{
        hash:"monitoramento",
        label:'Monitoramento em tempo real via painel',
        descricao:'Acompanhe as exibições em tempo real diretamente pelo painel da plataforma.',
        detalhes_modal:{
          descricao:`Visualize em tempo real o que está sendo exibido e o que
              será exibido na sequência, através de uma timeline organizada com a ordem e o tempo de cada mídia.
              <br>
              <br>
              Além disso, gerencie as programações com facilidade: cada programação organiza as inserções pagas,
              como por exemplo as exibições dos anunciantes do dia atual.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-timeline.jpg",
              alt:"imagem 1"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-programacao.jpg",
              alt:"imagem 2"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-programacao-exibicao.jpg",
              alt:"imagem 3"
            }
          ]
        }
      },
      gerenciamento_instacias:{
        hash:"gerenciamento_instacias",
        label:'Gerenciamento individual dos pontos de exibição',
        descricao:'Gerenciamento individual em casos com mais de um ponto de exibição ativo.',
        detalhes_modal:{
          descricao:`Controle cada ponto de exibição de forma individual, ativando ou desativando a exibição nas telas conforme sua necessidade.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/gerenciamento-instancias/ponto-de-exibicao.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      suporte:{
        hash:"suporte",
        label:'Suporte de segunda a sexta <span style="color:#00aaff;">em horário comercial</span>',
        descricao:'Atendimento disponível em dias úteis para auxiliar na operação e dúvidas da plataforma <span style="color:#00aaff;">em horário comercial.</span>',
        detalhes_modal:{
          descricao:`Atendimento disponível em dias úteis, <span style="color:#00aaff;">em horário comercial</span>, para auxiliar na operação da plataforma, 
                      esclarecer dúvidas, orientar sobre configurações e oferecer suporte sempre que necessário, garantindo 
                      que seus pontos de exibição funcionem corretamente e sem interrupções.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/suporte/img-suporte-whatsapp-owner.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      midias_default:{
        hash:"midias_default",
        label:'Até <span style="color:#00aaff;">8 mídias</span> padrão ativas',
        descricao:`Permite cadastrar até <span style="color:#00aaff;">8 anúncios</span> próprios, como promoções, produtos ou campanhas, que ficam 
        rodando automaticamente nas telas ao longo do dia.`,
        detalhes_modal:{
          descricao:`Permite cadastrar até <span style="color:#00aaff;">8 anúncios</span> próprios, como promoções da sua loja, divulgação de produtos, 
          campanhas sazonais ou avisos institucionais. Esses conteúdos ficam organizados na plataforma e são exibidos automaticamente nas telas ao longo 
          do dia, seguindo as prioridades definidas por peso, com alternância dinâmica para manter a exibição sempre ativa e atrativa.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/midias-default/midias-default.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      quantidade_instancias:{
        hash:"quantidade_instancias",
        label:`Controle <span style="color:#00aaff;">até 2</span> TVs/pontos de exibição`,
        descricao:`Permite <span style="color:#00aaff;">até 2 telas</span> conectadas exibindo anúncios simultaneamente.`,
        detalhes_modal:{
          descricao:`Permite conectar <span style="color:#00aaff;">até 2 telas</span> ao mesmo plano, exibindo anúncios simultaneamente e de 
          forma sincronizada. Ideal para quem possui mais de um ponto de exibição no estabelecimento e deseja gerenciar tudo em um único painel, 
          garantindo que os conteúdos sejam reproduzidos automaticamente em ambas as telas.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/quantidade-instancias/quantidade-instancias-owner.jpg",
              alt:"imagem 2"
            }
          ]
        }
      }
    }
  },
  agency:{
    hash:'agency',
    cor:'#845adf',
    titulo:'Profissional',
    preco_de:189.90,
    preco_por:159.90,
    descricao:'Ideal para gestores de mídia indoor que já possuem telas instaladas e desejam gerenciar conteúdos de forma remota, profissional e escalável.',
    label_btn_acao:'Começar agora',
    especificacoes:{
      checkout:{
        hash:"checkout",
        label:'Checkout de Anúncios para possiveis anúnciantes',
        descricao:'Anunciantes contratam exibição em suas TVs e realizam o pagamento automaticamente pela plataforma.',
        detalhes_modal:{
          descricao:'Com a funcionalidade monetização ativada, anunciantes contratam exibição em suas TVs e realizam o pagamento automaticamente pela plataforma, com sua comissão já calculada e contabilizada conforme a porcentagem acordada.',
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/checkout-rapido.jpg",
              alt:"imagem 1"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/confgis-monetizacao.jpg",
              alt:"imagem 2"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/checkout/listagem-repasses.jpg",
              alt:"imagem 3"
            }
          ]
        }
      },
      monitoramento:{
        hash:"monitoramento",
        label:'Monitoramento em tempo real via painel',
        descricao:'Acompanhe as exibições em tempo real diretamente pelo painel da plataforma.',
        detalhes_modal:{
          descricao:`Visualize em tempo real o que está sendo exibido e o que
              será exibido na sequência, através de uma timeline organizada com a ordem e o tempo de cada mídia.
              <br>
              <br>
              Além disso, gerencie as programações com facilidade: cada programação organiza as inserções pagas,
              como por exemplo as exibições dos anunciantes do dia atual.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-timeline.jpg",
              alt:"imagem 1"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-programacao.jpg",
              alt:"imagem 2"
            },
            {
              url:"resources/img/tema/planos/owner/especificacoes/monitoramento/exibicao-e-programacao-exibicao.jpg",
              alt:"imagem 3"
            }
          ]
        }
      },
      gerenciamento_instacias:{
        hash:"gerenciamento_instacias",
        label:'Gerenciamento individual dos pontos de exibição',
        descricao:'Gerenciamento individual em casos com mais de um ponto de exibição ativo.',
        detalhes_modal:{
          descricao:`Controle cada ponto de exibição de forma individual, ativando ou desativando a exibição nas telas conforme sua necessidade.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/gerenciamento-instancias/ponto-de-exibicao.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      suporte:{
        hash:"suporte",
        label:'Suporte de segunda a sexta <span style="color:#845adf;">24h por dia</span>',
        descricao:'Atendimento disponível em dias úteis para auxiliar na operação e dúvidas da plataforma <span style="color:#845adf;">24h por dia.</span>',
        detalhes_modal:{
          descricao:`Atendimento disponível em dias úteis, <span style="color:#845adf;">em horário comercial</span>, para auxiliar na operação da plataforma, 
                      esclarecer dúvidas, orientar sobre configurações e oferecer suporte sempre que necessário, garantindo 
                      que seus pontos de exibição funcionem corretamente e sem interrupções.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/suporte/img-suporte-whatsapp-agency.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      midias_default:{
        hash:"midias_default",
        label:'Até <span style="color:#845adf;">15 mídias</span> padrão ativas',
        descricao:`Permite cadastrar até <span style="color:#845adf;">15 anúncios</span>  próprios, como promoções, produtos ou campanhas, que ficam 
        rodando automaticamente nas telas ao longo do dia.`,
        detalhes_modal:{
          descricao:`Permite cadastrar até <span style="color:#845adf;">15 anúncios</span> próprios, como promoções da sua loja, divulgação de produtos, 
          campanhas sazonais ou avisos institucionais. Esses conteúdos ficam organizados na plataforma e são exibidos automaticamente nas telas ao longo 
          do dia, seguindo as prioridades definidas por peso, com alternância dinâmica para manter a exibição sempre ativa e atrativa.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/midias-default/midias-default.jpg",
              alt:"imagem 1"
            }
          ]
        }
      },
      quantidade_instancias:{
        hash:"quantidade_instancias",
        label:`Controle <span style="color:#845adf;">até 8</span> TVs/pontos de exibição`,
        descricao:`Permite <span style="color:#845adf;">até 8 telas</span> conectadas exibindo anúncios simultaneamente.`,
        detalhes_modal:{
          descricao:`Permite conectar <span style="color:#845adf;">até 8 telas</span> ao mesmo plano, exibindo anúncios simultaneamente e de 
          forma sincronizada. Ideal para quem possui mais de um ponto de exibição no estabelecimento e deseja gerenciar tudo em um único painel, 
          garantindo que os conteúdos sejam reproduzidos automaticamente em ambas as telas.`,
          imagens:[
            {
              url:"resources/img/tema/planos/owner/especificacoes/quantidade-instancias/quantidade-instancias-agency.jpg",
              alt:"imagem 2"
            }
          ]
        }
      }
    }
  }
}

function montarPlanos(dataPlanos){
  let ulListaPlanos = $('#ul-lista-planos');

  return new Promise((resolve, reject) => {
    Object.values(dataPlanos).forEach(dataPlano => {

      let liItemPlano = $(`
        <li class="item-lista-planos plano-${dataPlano.hash}" hash-plano="${dataPlano.hash}">
          <div class="content-plano">

            <div class="header-plano">
              <span class="icon-header"></span>
              <p class="title-plano">${dataPlano.titulo}</p>
            </div>

            <div class="box-preco">
              <div class="content-preco-de">
                <span class="moeda-preco">R$</span>
                <p class="value-preco">${dataPlano.preco_de}</p>
                <span class="label-mensalidade">/mês</span>
              </div>
              <div class="content-preco-por">
                <span class="moeda-preco">R$</span>
                <p class="value-preco">${dataPlano.preco_por}</p>
                <span class="label-mensalidade">/mês</span>
              </div>
            </div>

            <div class="box-descricao">
              <div class="content-descricao">
                <p class="descricao">${dataPlano.descricao}</p>
              </div>
            </div>

            <div class="box-especificacoes">
              <ul class="lista-especificacoes" id="lista-especificacoes-${dataPlano.hash}">

              </ul>
            </div>

            <div class="box-btns-acoes">
              <div class="content-btn-principal">
                <button linkinterno="true" class="btn-principal item-auto-scroll" id="btn-comecar-plano-${dataPlano.hash}">
                  <a href="#seja-parceiro" class="btn bounce-top">${dataPlano.label_btn_acao}</a>
                </button>
              </div>
            </div>
          </div>
        </li>
      `)

      ulListaPlanos.append(liItemPlano)

      let ulListaEspecificacoes = $(ulListaPlanos).find('#lista-especificacoes-'+dataPlano.hash)

      Object.values(dataPlano.especificacoes).forEach(especificacao => {
        
        let liItemEspecificacao = $(`
          <li class="item-lista-especificacoes" hash-especifica="${especificacao.hash}">
            <span class="icon-especificacao"></span>
            <div class="content-title">
              <p class="label-especificacao">${especificacao.label}</p>
            </div>

            <div class="content-tooltip">
              <div class="tooltip">
                <span class="icon">!</span>
                <span class="info-label">${especificacao.descricao}
                  <a href="#" class="btn-demonstracao-especificacao" id="btn-open-modal-demonstracao-${especificacao.hash}">Ver
                    detalhes</a>
                </span>
              </div>

              <!--Essa div tem que ser inteiramente monta via js com base em um json-->
              <div class="modal-demonstracao-especificacao" id="modal-demonstracao-especificacao-${especificacao.hash}">
                <div class="content-modal">
                  <div class="box-container-infos">
                    <div class="div-btn-close">
                      <button class="btn-close-modal btn-menu-x" id="btn-close-modal-demonstracao-${especificacao.hash}"
                        title="Fechar detalhes"></button>

                    </div>
                    <span class="title-item title-item-modal">${especificacao.label}</span>

                    <div class="content-descricao-item">

                      <p class="descricao">
                        ${especificacao.detalhes_modal.descricao}
                      </p>
                    </div>

                    <div class="preview preview-imgs-item" id="previewContainer-plano-${dataPlano.hash}-${especificacao.hash}">
                      
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </li>
        `)

        ulListaEspecificacoes.append(liItemEspecificacao)

        let ulListaImagens = $(ulListaEspecificacoes).find('#previewContainer-plano-'+dataPlano.hash+'-'+especificacao.hash)

        especificacao.detalhes_modal.imagens.forEach(img =>{
          let itemImg = $(
            `
            <img 
              class="imagem"
              src="${img.url}" 
              alt="${img.alt}">
            `
          )

          ulListaImagens.append(itemImg)
        })
      })
      
    })

    resolve(true)
  })
}

function listenActionsEspecificacoesPlano(boxPlano){
  let hashPlano     = boxPlano.getAttribute('hash-plano');
  let especificacoes= boxPlano.querySelectorAll('.item-lista-especificacoes');

  especificacoes.forEach(especificacao => {

    let hashEspecificacao = especificacao.getAttribute('hash-especifica');
    let btnOpenModalDemonstracao = especificacao.querySelector('#btn-open-modal-demonstracao-'+hashEspecificacao)
    let btnCloseModalDemonstracao = especificacao.querySelector('#btn-close-modal-demonstracao-'+hashEspecificacao)
    let modalDemonstracao        = especificacao.querySelector('#modal-demonstracao-especificacao-'+hashEspecificacao)

    if(btnOpenModalDemonstracao){

      btnOpenModalDemonstracao.addEventListener('click', (e)=>{
        e.preventDefault()
        modalDemonstracao.classList.add('modal-demonstracao-especificacao-opened')
        
      })

      btnCloseModalDemonstracao.addEventListener('click',(e)=>{
        e.preventDefault()
        modalDemonstracao.classList.remove('modal-demonstracao-especificacao-opened')
        
      })

      const container = document.getElementById('previewContainer-plano-'+hashPlano+'-'+hashEspecificacao); //deixar dinamico

      const viewer = new Viewer(container, {
        navbar: true,   // miniaturas
        toolbar: true,  // botões de zoom
        title: false,
        movable: true,
        zoomable: true,
        scalable: true,
      });

    }
  })
}
